import { BadRequestException, ConflictException, ForbiddenException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompetitionDTO } from "./competitionsDto/createCompetitions.dto"; 
import type { Cache } from 'cache-manager';
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { QueueService } from "src/confirmationJob/confirmationJobQueue.service.ts";

@Injectable()
export class CompetitionsServices {
    constructor(private readonly prisma: PrismaService, 
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        private readonly queue: QueueService
    ) {}

    async createCompetitions(createCompetition: CreateCompetitionDTO) {

        //generate the startDate for the competition
        const deadlineDate = new Date(createCompetition.regDeadline);
        const startDate = new Date(deadlineDate);
        startDate.setDate(deadlineDate.getDate() + 1);

        //push the info into the database
        const competition = await this.prisma.competitions.create({
            data: {
                title: createCompetition.title,
                description: createCompetition.description,
                tags: createCompetition.tags,
                capacity: createCompetition.capacity,
                startDate: startDate,
                regDeadLine: createCompetition.regDeadline
            },
            select: {
                competitionId: true
            }
        })
        console.log(`[Competition Service] Competition ${competition.competitionId} created {${new Date().toISOString}}`);
        return { message: "Competition created successfully!", competitionId: competition.competitionId }; 
    }


    //concurrency possible
    async registerForCompetition(idempotencyKey: string, competitionId: string, userId: string) {
        //check if the competitionId even exist
        const competition = await this.prisma.competitions.findUniqueOrThrow({
            where: { competitionId: competitionId },
            select: {
                competitionId:true,
            }
        });

        //idempotency verification
        console.log(`Request for registration by ${userId} at ${new Date().toISOString()} for competition ${competitionId}`);
        const cacheIdempotency = await this.cacheManager.get<string>(`idempotency:${idempotencyKey}`);
        if(cacheIdempotency) {
            console.log(`Idempotency key conflict by user ${idempotencyKey} at ${new Date().toISOString()}`);
            throw new ConflictException('Request already in progress.');
        }

        //if idempotency key doesn't exist in redis
        if(!cacheIdempotency) {
            try {
                    await this.cacheManager.set(`idempotency:${idempotencyKey}`, userId, 3600);
                    console.log(`Idempotency key added to Redis for user ${userId} registration request at ${new Date().toISOString()}`)
            } catch (err) {
                throw new err;
            }
        }

        const registration = await this.prisma.$transaction(async (tx) => {

            //query the registeredCount and regDeadline from Competition table
            const [competition] = await tx.$queryRaw<{ capacity: number; regDeadline: Date; registeredCount: number }[]>`SELECT capacity, "regDeadLine", "registeredCount" FROM "Competitions" WHERE "competitionId" = ${competitionId} FOR UPDATE`;

            //checking for registration Deadlin
            if(new Date() > competition.regDeadline) {
                throw new ForbiddenException('The registration deadline for the competition is over.');
            }

            if(competition.registeredCount == competition.capacity) {
                throw new ConflictException('The number of participants has reached the maximum capacity.')
            }

            await tx.competitions.update({
                where: {
                    competitionId: competitionId
                },
                data: {
                    registeredCount: { increment: 1}
                }
            });

            const registrationId = await tx.registrations.create({
                data: {
                    userId: userId,
                    competitionId: competitionId
                },
                select: {
                    registrationID: true
                }
            });


            //add the registration to the registration:confirmation queue
            await this.queue.insertIntoQueue({
                userId: userId,
                competitionId: competitionId,
                registrationId: registration.registrationId.registrationID
            });

            return { message: "Registration successful!", registrationId: registrationId};

        });
    }
};