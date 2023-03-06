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
@ApiTags('Users')
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
          email: 'email@gmail.com',
        },
      },
    },
  })
  createUser(@Body() user: UsersDto) {
    return this.usersService.createUser(user);
  }
}
