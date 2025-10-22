import { Module } from "@nestjs/common";
import { WorkerService } from "./confirmationJob.worker.service";
import { QueueService } from "./confirmationJobQueue.service.ts";
import { BullModule } from "@nestjs/bullmq";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'registration_confirmation',
        }),
        PrismaModule
    ],
    providers: [QueueService, WorkerService],
    exports: [QueueService]
})
export class ConfirmationJobModule {}