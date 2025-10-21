import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class QueueService {
    constructor(private readonly prisma:PrismaService,
        @InjectQueue('registration:confirmation') private readonly registrationQueue:Queue
    ) {}

    async insertIntoQueue(data) {
        await this.registrationQueue.add('confirm-registration', data, {
            attempts: 5,
            backoff: {
                type: 'exponential', delay: 1000
            }
        });
        console.log(`[QueueService] Added job 'confirm-registration' for user ${data.userId}`);
    }  
};