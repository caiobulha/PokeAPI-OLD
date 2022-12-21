import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCaio(): any {
    const a = [
      {
        name: 'bullbasaur',
      },
    ];
    return a;
  }

  documentation(): any {
    return 'Wanna see the API? try <a href="/api"></a>';
  }
}
