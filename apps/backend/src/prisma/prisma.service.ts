// import { PrismaClient } from "../generated/prisma";
// // import { PrismaClient } from "@prisma/client";
// import { OnModuleInit, OnModuleDestroy, Injectable } from "@nestjs/common";

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit {
//     async onModuleInit() {
//         await this.$connect();
//     }

//     async onModuleDestroy() {
//         await this.$disconnect();
//     }
// };


// apps/backend/src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    
    constructor(private readonly configService: ConfigService) {
        // We initialize PrismaClient by passing the database URL directly
        super({
            datasources: {
                db: {
                    // This is the correct, reliable call
                    url: configService.get<string>('DATABASE_URL'),
                },
            },
        });
    }

    async onModuleInit() {
        // You would also put your try/catch logic here, but for now:
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}