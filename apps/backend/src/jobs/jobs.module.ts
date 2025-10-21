import { Module } from "@nestjs/common";
import { WorkerService } from "./jobs.consumer.service";
import { QueueService } from "./jobs.producer.service";
import { BullModule } from "@nestjs/bullmq";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'registration:confirmation',
        })
    ],
    providers: [QueueService, WorkerService],
    exports: [QueueService]
})
export class JobModule {}