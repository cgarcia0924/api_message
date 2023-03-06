import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../../users/users.service';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './../../dto/jwt-payload';

@Injectable()
export class JwtService extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('auth.secretKey'),
    });
  }
  /**
   * Cada vez que ejecutemos un endpoint con seguridad, pasara por aquí
   * y almacenará en "user" el usuario que nosotros hemos metido en el login
   * @param payload
   * @returns
   */
  async validate(payload: JwtPayload) {
    const user = await this.userService.findUserbyEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
