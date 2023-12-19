import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seedUsers';
import { seedStatuses } from './seedStatuses';
import { seedTickets } from './seedTickets';

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedStatuses(prisma);
  await seedTickets(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
