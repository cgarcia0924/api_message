import {
  Body,
  UseGuards,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { DevopsService } from './devops.service';
import { JwtService } from '@nestjs/jwt';
import {
  ApiBody,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UsersDto } from '../users/dto/users-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('devops')
@ApiTags('Api')
// @Controller('api/v1/devops')
export class DevopsController {
  constructor(private devopsService: DevopsService) { }
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Crea un mensaje, se debe adjuntar la Api Keys',
  })
  @ApiBody({
    description:
      'Crea un mensaje. Devuelve en formato json si se realiza con exito.',
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
}
