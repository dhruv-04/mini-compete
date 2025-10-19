// apps/backend/src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // <-- NEW
import { PrismaService } from './prisma.service';

@Module({
    imports: [ConfigModule], // Need to import ConfigModule here
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}