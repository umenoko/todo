import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export async function seedTickets(prisma: PrismaClient) {
  const users = await prisma.user.findMany();
  const statusRecords = await prisma.status.findMany();

  for (let i = 0; i < 20; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomStatus =
      statusRecords[Math.floor(Math.random() * statusRecords.length)];

    await prisma.ticket.create({
      data: {
        id: uuidv4(),
        title: `Ticket ${i}`,
        description: `Description for ticket ${i}`,
        status: {
          connect: { id: randomStatus.id },
        },
        users: {
          create: {
            id: uuidv4(),
            users: {
              connect: { id: randomUser.id },
            },
          },
        },
      },
    });
  }
}
