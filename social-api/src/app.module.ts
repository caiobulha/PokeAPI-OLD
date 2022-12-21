import { Module } from '@nestjs/common';
import { AppController, DefaultController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, DefaultController],
  providers: [AppService],
})
export class AppModule {}
