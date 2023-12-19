import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export async function seedUsers(prisma: PrismaClient) {
  for (let i = 0; i < 5; i++) {
    await prisma.user.upsert({
      where: { email: `user${i}@example.com` },
      update: {},
      create: {
        id: uuidv4(),
        email: `user${i}@example.com`,
        name: `User ${i}`,
      },
    });
  }
}
