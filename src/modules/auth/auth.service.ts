import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt-payload';

require('dotenv').config();
@Injectable()
export class AuthService {
  private readonly apiKey;

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = configService.get('auth.apiKey');
    // console.log("api: ", this.apiKey)
  }
  //metodo de la clase
  validateApiKey(apiKey: string) {
    // console.log("carlos", apiKey, this.apiKey)
    return this.apiKey === apiKey;
  }
  /**
   * Valida si el usuario existe y su pass es correcta
   * @param authCredentials
   * @returns
   */
  async validateUser(authCredentials: AuthCredentialsDto) {
    // Busco si existe el usuario en la base de datos
    const user = await this.userService.findUserbyEmail(authCredentials.email);
    if (user) {
      return user;
    }
    return null;
  }
  /**
   * Nos logueamos en nuestra app, devolviendo un accessToken
   * @param authCredentials
   * @returns
   */
  async login(authCredentials: AuthCredentialsDto) {
    // Validamos si existe el usuario
    const user = await this.validateUser(authCredentials);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    // Creamos nuestro payload
    const payload: JwtPayload = {
      email: user.email,
    };
    // Firmamos nuestro payload
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
