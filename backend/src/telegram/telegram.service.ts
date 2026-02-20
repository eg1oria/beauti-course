import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TelegramService {
  private readonly botToken = process.env.TG_BOT_TOKEN;
  private readonly chatId = process.env.TG_CHAT_ID;

  constructor(private readonly httpService: HttpService) {}

  private sanitize(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .trim()
      .slice(0, 500);
  }

  async sendMessage(dto: CreateLeadDto) {
    const name = this.sanitize(dto.name);
    const telegram = this.sanitize(dto.telegram);
    const phone = this.sanitize(dto.phone);

    const message = `
<b>🔥 Новая заявка с сайта!</b>

<b>Имя:</b> ${name}

<b>Telegram:</b> ${telegram}

<b>Телефон:</b> ${phone}
    `;

    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    try {
      await firstValueFrom(
        this.httpService.post(url, {
          chat_id: this.chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      );

      return { status: 'success', message: 'Message sent' };
    } catch (error) {
      console.error('Telegram Error:', error);
      throw new HttpException(
        'Error sending to Telegram',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
