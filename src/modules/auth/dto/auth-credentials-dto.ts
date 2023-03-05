import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDto {
    @ApiProperty({
        name: 'email',
        type: String,
        required: true,
        description: 'Email del usuario a loguear'
    })
    @IsNotEmpty()
    @IsEmail()
    email!: string;

}