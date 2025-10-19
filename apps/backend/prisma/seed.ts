import { PrismaClient, UserRole } from '../generated/prisma'; 
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const hashedPassword = await bcrypt.hash('password123', 10);

  // --- Create Organizers (2) ---
  const org1 = await prisma.user.create({
    data: {
      email: 'organizer1@test.com',
      name: 'Organizer One',
      password: hashedPassword,
      role: UserRole.organizer,
    },
  });

  const org2 = await prisma.user.create({
    data: {
      email: 'organizer2@test.com',
      name: 'Organizer Two',
      password: hashedPassword,
      role: UserRole.organizer,
    },
  });
  console.log('Created 2 Organizers');

  // --- Create Participants (5) ---
  for (let i = 1; i <= 5; i++) {
    await prisma.user.create({
      data: {
        email: `participant${i}@test.com`,
        name: `Participant ${i}`,
        password: hashedPassword,
        role: UserRole.participant,
      },
    });
  }
  console.log('Created 5 Participants');

  // --- Create Competitions (5) ---
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  // You are generating IDs in the service, but for seeds, we can let Prisma do it
  // IF you change your schema to @default(uuid()).
  // SINCE YOU ARE NOT, we must provide them.
  
  // Note: Your schema requires you to provide the competitionId.
  // It's easier to let Prisma do it. Change your schema to:
  // competitionId String @id @default(uuid())

  await prisma.competitions.create({
    data: {
      competitionId: "1234",
      title: 'Global Coding Challenge',
      description: 'A 24-hour hackathon for all skill levels.',
      tags: ['coding', 'hackathon', 'global'],
      capacity: 100,
      regDeadLine: tomorrow, // Registration closes tomorrow
    },
  });

  await prisma.competitions.create({
    data: {
      competitionId: "1235",
      title: 'Design Sprint 2025',
      description: 'Solve real-world problems with design thinking.',
      tags: ['design', 'ui/ux'],
      capacity: 50,
      regDeadLine: nextWeek, // Registration closes next week
    },
  });

  // Add 3 more simple competitions
  await prisma.competitions.create({ data: { competitionId: "1237", title: 'Quick SQL', description: 'A 24-hour hackathon for all skill levels.', capacity: 20, regDeadLine: tomorrow, tags: [] } });
  await prisma.competitions.create({ data: { competitionId: "1236", title: 'Algo Marathon', description: 'A 24-hour hackathon for all skill levels.', capacity: 50, regDeadLine: nextWeek, tags: ['algo'] } });
  await prisma.competitions.create({ data: { competitionId: "1238", title: 'CSS Battle', description: 'A 24-hour hackathon for all skill levels.', capacity: 30, regDeadLine: tomorrow, tags: ['css', 'frontend'] } });

  console.log('Created 5 Competitions');

  console.log('Seeding finished.');
}

// Run the seed script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  });