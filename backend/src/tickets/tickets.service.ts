import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Ticket, Prisma } from '@prisma/client';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  async ticket(id: string): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: { id },
    });
  }

  async tickets(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany();
  }

  async createTicket(data: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({
      data,
    });
  }
}
