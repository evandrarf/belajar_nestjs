import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CobaController } from './coba/coba.controller';
import { CobaService } from './coba/coba.service';

@Module({
  imports: [],
  controllers: [AppController, CobaController],
  providers: [AppService, CobaService],
})
export class AppModule {}
