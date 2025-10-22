import { Processor, WorkerHost } from "@nestjs/bullmq";
import { ReminderWorkerInterface } from "src/interfaces/reminder.worker.interface";
import { Job } from "bullmq";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Processor('reminder_notify')
@Injectable()
export class ReminderWorkerService extends WorkerHost {
    constructor(private readonly prisma: PrismaService) {
        super()
    }

    /**
     * Function to mail the user in the reminder:notify queue
     */

    async process(job: Job<ReminderWorkerInterface>) {
        const { userId, name, email, title, startDate } = job.data;

        try {
            const subject = `Reminder: Your competition "${title}" is tomorrow!`;
            const body = `Dear ${name},

                This is a friendly reminder that the competition "${title}" is scheduled to start tomorrow, ${new Date(startDate).toLocaleDateString()}.

                We look forward to seeing you there!

                Best regards,
                The Competition Team`;

            const mail = await this.prisma.mailBox.create({
                data: {
                    userId: userId,
                    to: email,
                    subject: subject,
                    body: body,
                },
                select: {
                    id: true
                }
            });

            console.log(`[ReminderWorker] Email sent successfully to user ${email} at ${new Date().toISOString()}`);

        } catch (err) {
            console.log(`[ReminderWorker] Error sending email to user ${email} at ${new Date().toISOString()}`);
            throw err;
        }
    }
};