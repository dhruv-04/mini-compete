import { ConflictException, ForbiddenException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompetitionDTO } from "./competitionsDto/createCompetitions.dto"; 
import type { Cache } from 'cache-manager';
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { timestamp } from "rxjs";

@Injectable()
export class CompetitionsServices {
    constructor(private readonly prisma: PrismaService, 
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

    async createCompetitions(createCompetition: CreateCompetitionDTO) {
        //push the info into the database
        const competition = await this.prisma.competitions.create({
            data: {
                title: createCompetition.title,
                description: createCompetition.description,
                tags: createCompetition.tags,
                capacity: createCompetition.capacity,
                regDeadLine: createCompetition.regDeadline
            },
            select: {
                competitionId: true
            }
        })

        return { message: "Competition created successfully!", competitionId: competition.competitionId }; 
    }


    //concurrency possible
    async registerForCompetition(email: string, idempotencyKey: string, competitionId: string, userId: string) {
        //idempotency verification
        console.log(`Request for registration by ${email} at ${timestamp} for competition ${competitionId}`);
        const cacheIdempotency = await this.cacheManager.get<string>(`idempotency:${idempotencyKey}`);
        if(cacheIdempotency) {
            console.log(`Idempotency key conflict by user ${idempotencyKey} at ${timestamp}`);
            throw new ConflictException('Request already in progress.');
        }

        //if idempotency key doesn't exist in redis
        if(!cacheIdempotency) {
            try {
                    await this.cacheManager.set(`indempotency:${idempotencyKey}`, userId, 3600);
                    console.log(`Idempotency key added to Redis for user ${userId} registration request at ${timestamp}`)
            } catch (err) {
                throw new err;
            }
        }

        //TODO: Add code for registration
        const registration = await this.prisma.$transaction(async (tx) => {

            //query the registeredCount and regDeadline from Competition table
            const [competition] = await tx.$queryRaw<{ capacity: number; regDeadline: Date; registeredCount: number }[]>`SELECT capacity, regDeadline, registeredCount FROM "Competitions" WHERE "competitionId" = ${competitionId} FOR UPDATE`;

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

            return { message: "Registration successful!", registrationId: registrationId};

        });
    }
};