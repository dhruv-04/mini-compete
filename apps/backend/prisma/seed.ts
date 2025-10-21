import { PrismaClient, UserRole, RegistrationStatus } from '../src/generated/prisma';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

// Helper function to create dates for competitions
const getCompetitionDate = (daysInFuture: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysInFuture);
  return date;
};

async function main() {
  console.log('Start seeding...');

  // --- 1. Cleanup existing data (Optional, but recommended for consistent seeding) ---
  await prisma.registrations.deleteMany();
  await prisma.competitions.deleteMany();
  await prisma.mailBox.deleteMany();
  await prisma.failedJobs.deleteMany();
  await prisma.user.deleteMany();

  // The password 'password123' will be hashed
  const hashedPassword = await hash('password123', 10);

  // --- 2. Seed Users (2 Organizers + 5 Participants) ---
  const organizerData = [
    { email: 'alice@organize.com', name: 'Alice Organizer', role: UserRole.organizer, password: hashedPassword },
    { email: 'bob@organize.com', name: 'Bob Organizer', role: UserRole.organizer, password: hashedPassword },
  ];

  const participantData = [
    { email: 'user1@test.com', name: 'Charlie Participant', role: UserRole.participant, password: hashedPassword },
    { email: 'user2@test.com', name: 'Dana Participant', role: UserRole.participant, password: hashedPassword },
    { email: 'user3@test.com', name: 'Ethan Participant', role: UserRole.participant, password: hashedPassword },
    { email: 'user4@test.com', name: 'Fiona Participant', role: UserRole.participant, password: hashedPassword },
    { email: 'user5@test.com', name: 'George Participant', role: UserRole.participant, password: hashedPassword },
  ];

  const allUsers = [...organizerData, ...participantData];

  // const users = [];
  for (const userData of allUsers) {
    const user = await prisma.user.create({ data: userData });
    // users.push(user);
  }

  // const participants = users.slice(2); // The 5 participant users

  // console.log(`Seeded ${users.length} users.`);
  // 

  // --- 3. Seed 5 Competitions ---
  const competitionTitles = [
    'Web Development Hackathon',
    'AI & ML Data Challenge',
    'Mobile App UI/UX Contest',
    'Cloud Architecture Design',
    'Backend API Performance Race',
  ];

  const competitionData = competitionTitles.map((title, index) => ({
    title: title,
    description: `A challenging competition for ${title}`,
    tags: ['Tech', 'Coding', 'Innovation'],
    capacity: 100,
    regDeadLine: getCompetitionDate(5 + index),  // 5 to 9 days from now
    startDate: getCompetitionDate(10 + index),    // 10 to 14 days from now
  }));

  const competitions = [];
  for (const data of competitionData) {
    const competition = await prisma.competitions.create({ data });
    // competitions.push(competition);
  }

  // console.log(`Seeded ${competitions.length} competitions.`);
  console.log('Seeding finished.');
}

// --- Error Handling and Disconnection ---
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });