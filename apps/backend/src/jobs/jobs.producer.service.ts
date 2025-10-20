import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class QueueService {
    constructor(private readonly prisma:PrismaService,
        @InjectQueue('registration:confirmation') private readonly registrationQueue:Queue
    ) {}

    
};