import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
require('dotenv').config();
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    private readonly apiKey;

    constructor(
        private jwtService: JwtService,
        private readonly configService: ConfigService){
            this.apiKey = configService.get('auth.apiKey')
        // console.log("api: ", this.apiKey)
        }
    //metodo de la clase
    validateApiKey(apiKey: string) {
        // console.log("carlos", apiKey, this.apiKey)
        return this.apiKey === apiKey;
    }
}

