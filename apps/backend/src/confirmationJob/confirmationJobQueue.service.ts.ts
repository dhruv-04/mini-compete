import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";

@Injectable()
export class QueueService {
    constructor(
        @InjectQueue('registration_confirmation') private readonly registrationQueue:Queue
    ) {}

    async insertIntoQueue(data: {
        userId: string,
        competitionId: string,
        registrationId: string,
    }) {
        await this.registrationQueue.add('confirm_registration', data, {
            attempts: 5,
            backoff: {
                type: 'exponential', delay: 1000
            }
        });
        console.log(`[QueueService] Added job 'confirm-registration' for user ${data.userId}`);
    }  
};