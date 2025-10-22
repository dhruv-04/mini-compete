import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { Queue } from "bullmq";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CronWorkerService {
    constructor(
        private readonly prisma:PrismaService,
        @InjectQueue('reminder_notify') private readonly reminderQueue:Queue
    ) {}


    /**
     * 
     * Function to collect user email, user name, compeition name and start date
     * to be sent into the reminder:notify queue
     * 
     */

    @Cron(CronExpression.EVERY_MINUTE)
    async competitionReminder() {

        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const competition = await this.prisma.competitions.findMany({
                where: { startDate: {
                    gt: today,
                    lte: tomorrow
                },
            },
            select: {
                competitionId: true,
                title: true,
                startDate: true,
                registrations: {
                    where: { registrationStatus: 'CONFIRMED' },
                    select: {
                        user: {
                            select: {
                                email: true,
                                name: true,
                                userId: true
                            }
                        }
                    }
                }
            }
        });

        for(const comp of competition) {
            for(const reg of comp.registrations) {
                const payload = {
                    userId: reg.user.userId,
                    name: reg.user.name,
                    email: reg.user.email,
                    title: comp.title,
                    startDate: comp.startDate
                }

                //adding the payload to reminder:notify queue
                this.reminderQueue.add('send_reminder', payload, {
                    attempts: 5,
                    backoff: {
                        type: 'exponential', delay: 1000
                    }
                });
                console.log(`[CronJob] New reminder payload added for ${reg.user.email} at ${new Date().toISOString()}`);
            }
        }
    }
};