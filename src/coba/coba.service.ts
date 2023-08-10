import { Injectable } from '@nestjs/common';

import { Coba } from './coba.interface';

@Injectable()
export class CobaService {
  getCoba({ params: params }): Array<string> {
    return ['halo', params.id];
  }

  getHalo({ name }): Coba[] {
    return [{ age: 99, name: name, class: 'A' }];
  }
}
