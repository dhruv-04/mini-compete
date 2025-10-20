import { Processor, OnQueueEvent } from "@nestjs/bullmq";
import { PrismaService } from "src/prisma/prisma.service";
import { Job } from "bullmq";
import { timestamp } from "rxjs";

interface ConfirmationPayload {
    userId: string;
    registrationId: string;
    competitionId: string;
};

@Processor("registration:confirmation")
export class WorkerService {
    constructor(private readonly prisma: PrismaService) {}

    async process(job: Job<ConfirmationPayload>) {
        const { userId, registrationId, competitionId} = job.data;

        //get user information from user table
        const user = await this.prisma.user.findUnique({
            where: { userId: userId },
            select: { email: true, name: true }
        });

        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }

        //get competition information from competition table
        const competitionName = await this.prisma.competitions.findUniqueOrThrow({
            where: { competitionId: competitionId},
            select: { title: true }
        });

        //generate the subject and body
        const subject = `Confirmation For your participation in ${competitionName.title}`;
        const body = `Dear ${user.name}, We are pleased to confirm your successful registration and participation in the ${competitionName.title}!`;

        //simulate the confirmation email into the MailBox
        const MailId = await this.prisma.mailBox.create({
            data: {
                userId: userId,
                to: user.email,
                subject: subject,
                body: body
            },
            select: {
                id: true
            }
        });

        console.log(`Email simulated for ${user.name} registration at ${new Date().toISOString()}`);


    }
};