import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'reminder:notify'
        }),
        PrismaModule
    ],
    providers: [],
    exports: []
})
export class CronJobModule {}