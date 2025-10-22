import { Module } from "@nestjs/common";
import { CompetitionsServices } from "./competitions.service";
import { CompetitionsController } from "./competitions.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "src/auth/auth.module";
import { ConfirmationJobModule } from "src/confirmationJob/confirmationJob.module";

@Module({
    imports: [PrismaModule,
        AuthModule,
        ConfirmationJobModule,
    ],
    controllers: [CompetitionsController],
    providers: [CompetitionsServices]
})
export class CompetitionModule {};