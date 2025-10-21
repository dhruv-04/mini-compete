import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { Queue } from "bullmq";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CronWorkerService {
    constructor(
        private readonly prisma:PrismaService,
        @InjectQueue('reminder:notify') reminderQueue:Queue
    ) {}

    @Cron(CronExpression.EVERY_MINUTE)
    //complete this function without startDate field in competition
    async competitionReminder() {
        const competition = await this.prisma.competitions.findMany({
                where: { regDeadLine: {
                    gt: new Date()
                }
            },
            include: {

            }
        });
    }
};