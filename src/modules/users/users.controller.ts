import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UsersDto } from './dto/users-dto';
import { UsersService } from './users.service';
@Controller('users')
@ApiTags('1 - Users: Crear usuarios para autenticación')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({
    description: 'Crea un usuario.',
  })
  @ApiBody({
    description:
      'Crea un usuario medainte email, Devuelve true si se realiza con exito.',
    type: UsersDto,
    examples: {
      ejemplo1: {
        value: {
          email: 'test@gmail.com',
        },
      },
    },
  })
  createUser(@Body() user: UsersDto) {
    return this.usersService.createUser(user);
  }
}
