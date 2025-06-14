import { Module } from '@nestjs/common';
import { QrController } from './qr/qr.controller';
import { QrService } from './qr/qr.service';
import { MovieService } from './movie/movie.service';

@Module({
  controllers: [QrController],
  providers: [QrService, MovieService],
})
export class AppModule {}
