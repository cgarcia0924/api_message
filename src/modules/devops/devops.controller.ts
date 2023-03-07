import {
  Body,
  UseGuards,
  Controller,
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Post,
  Res,
  Get,
  Put,
  Patch,
  Delete,
  Head,
} from '@nestjs/common';
import { DevopsService } from './devops.service';
import { JwtService } from '@nestjs/jwt';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { UsersDto } from '../users/dto/users-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('devops')
@ApiTags('3 - Api Messege: Métodos requeridos')
// @Controller('api/v1/devops')
export class DevopsController {
  constructor(private devopsService: DevopsService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Crea un mensaje, se debe adjuntar la Api Keys',
  })
  @ApiBody({
    description:
      'Crea un mensaje, mediante un UsersDto. Devuelve retorna en formato json si se realiza con exito.',
    type: UsersDto,
    examples: {
      ejemplo1: {
        value: {
          message: 'This is a test',
          to: 'Juan Perez',
          from: 'Rita Asturia',
          timeToLifeSec: 45,
        },
      },
    },
  })
  createMessage(
    @Body()
    data: { message: string; to: string; from: string; timeToLifeSec: string },
    @Res() res,
  ) {
    res.json(
      this.devopsService.createMessage(
        data.message,
        data.to,
        data.from,
        data.timeToLifeSec,
      ),
    );
  }
  @Put()
  async findPut() {
    // throw new HttpException('ERRORR-Put', HttpStatus.NOT_FOUND);
    return 'ERROR';
  }
  @Get()
  async findGet() {
    return 'ERROR';
    throw new HttpException('ERROR-Get', HttpStatus.NOT_FOUND);
  }
  @Patch()
  async findpatch() {
    return 'ERROR';
    throw new HttpException('ERROR-Patch', HttpStatus.NOT_FOUND);
  }
  @Delete()
  async findDelete() {
    return 'ERROR';
    throw new HttpException('ERROR-Delete', HttpStatus.NOT_FOUND);
  }
}
