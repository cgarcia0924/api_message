import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Token')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  @ApiOperation({
    description: 'Generar token para el uso de la api',
  })
  @ApiBody({
    description: 'Permite la generación de un JWT para continuar con el proceso',
    // type: AuthCredentialsDto,
    examples: {
      ejemplo: {
        value: {
          email: 'test@gmail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Parámetro incorrecto, debe ser formato correo',
  })
  @ApiResponse({
    status: 201,
    description: 'Token generado con éxito',
  })
  
  login(@Body() authCredentials: AuthCredentialsDto) {
    return this.authService.login(authCredentials);
  }
}
