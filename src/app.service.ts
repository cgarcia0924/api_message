import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let mensaje = 'Bienvenido, Api by Carlos Garcia Chacon!'
    return mensaje;
  }
}
