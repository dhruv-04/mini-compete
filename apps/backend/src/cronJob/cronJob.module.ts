import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { CronWorkerService } from "./cronJob.service";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'reminder:notify'
        }),
        PrismaModule
    ],
    providers: [CronWorkerService],
    exports: []
})
export class CronJobModule {}