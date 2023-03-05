import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) {}
        @Post('/login')
        @ApiOperation({
            description: 'Nos loguea en la aplicacion'
        })
        @ApiBody({
            description: 'Nos loguea en la aplicacion usando las credenciales',
            type: AuthCredentialsDto,
            examples: {
                ejemplo: {
                    value: {
                        email: "test@gmail.com",
                    }
                }
            }
        })
        @ApiResponse({
            status: 401,
            description: 'Credenciales inválidas'
        })
        @ApiResponse({
            status: 201,
            description: 'Login realizado con éxito'
        })
        login(@Body() authCredentials: AuthCredentialsDto) {
            return this.authService.login(authCredentials);
        }
}
