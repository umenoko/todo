import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export async function seedStatuses(prisma: PrismaClient) {
  const statuses = ['Todo', 'Doing', 'Done'];
  for (const status of statuses) {
    await prisma.status.upsert({
      where: { name: status },
      update: {},
      create: {
        id: uuidv4(),
        name: status,
        order: statuses.indexOf(status),
      },
    });
  }
}
