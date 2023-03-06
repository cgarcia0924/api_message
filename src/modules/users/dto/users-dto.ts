import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
} from 'class-validator';

export class UsersDto {
  @ApiProperty({
    name: 'email',
    type: String,
    description: 'Email del usuario',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
