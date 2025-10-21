import { Module } from "@nestjs/common";
import { CompetitionsServices } from "./competitions.service";
import { CompetitionsController } from "./competitions.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [PrismaModule,
        AuthModule
    ],
    controllers: [CompetitionsController],
    providers: [CompetitionsServices]
})
export class CompetitionModule {};