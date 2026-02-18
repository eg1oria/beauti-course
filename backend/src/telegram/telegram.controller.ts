// telegram.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('send')
  async sendMessage(@Body() createLeadDto: CreateLeadDto) {
    return this.telegramService.sendMessage(createLeadDto);
  }
}
