import { Controller, Get, Param, Query } from '@nestjs/common';

import { CobaService } from './coba.service';
import { Coba } from './coba.interface';

@Controller('coba')
export class CobaController {
  constructor(private readonly cobaService: CobaService) {}
  @Get('halo')
  getHalo(@Query('name') name: string): Array<Coba> {
    return this.cobaService.getHalo({ name });
  }

  @Get(':id')
  getCoba(@Param() params: any): Array<string> {
    return this.cobaService.getCoba({ params });
  }
}
