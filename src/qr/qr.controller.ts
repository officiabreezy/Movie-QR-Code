import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { QrService } from './qr.service';
import * as QRCode from 'qrcode';
import { Request } from 'express';
import { Movie } from './qr.service'; // Assuming Movie interface is defined in qr.service.ts

@Controller()
export class QrController {
  constructor(private qrService: QrService) {}

  @Get()
  @Render('qr')
  async getQr(@Req() req: Request) {
    const id = this.qrService.generateNewLink();
    const link = `${req.protocol}://${req.get('host')}/movies/${id}`;
    const qrCode = await QRCode.toDataURL(link);

    return { qrCode, link };
  }

  @Get('movies/:id')
  @Render('movies')
  getMovies(@Param('id') id: string) : { movies: Movie[] } {
    const movies = this.qrService.getMoviesById(id);
    if (!movies) throw new Error('Invalid or expired link');

    return { movies };
  }
}
