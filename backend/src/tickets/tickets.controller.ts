import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from '@prisma/client';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get(':id')
  async findTicketById(@Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.ticket(id);
  }

  @Get()
  async tickets(): Promise<Ticket[]> {
    return this.ticketsService.tickets();
  }
}
