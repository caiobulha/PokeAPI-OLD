import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class DefaultController {
  @Get()
  redirect(@Res() res: any): void {
    res.redirect('api');
  }
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('caio')
  getCaio(): any {
    return this.appService.getCaio();
  }
  @Get()
  documentation(): string {
    return this.appService.documentation();
  }
}
