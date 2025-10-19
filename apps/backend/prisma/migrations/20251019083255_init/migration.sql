-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('participant', 'organizer');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Competitions" (
    "competitionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "capacity" INTEGER NOT NULL,
    "regDeadLine" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competitions_pkey" PRIMARY KEY ("competitionId")
);

-- CreateTable
CREATE TABLE "Registrations" (
    "registrationID" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,

    CONSTRAINT "Registrations_pkey" PRIMARY KEY ("registrationID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registrations_userId_competitionId_key" ON "Registrations"("userId", "competitionId");
