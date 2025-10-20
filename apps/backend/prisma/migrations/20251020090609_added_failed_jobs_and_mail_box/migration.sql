-- CreateTable
CREATE TABLE "MailBox" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MailBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FailedJobs" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "reason" TEXT NOT NULL,
    "failedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FailedJobs_pkey" PRIMARY KEY ("id")
);
