import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Array<string> {
    return ['halo', 'ita'];
  }
}
