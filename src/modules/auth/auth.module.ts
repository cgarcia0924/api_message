import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';
import { ApikeyService } from './strategy/apikey/apikey.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from './strategy/jwt/jwt.service';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('auth.secretKey'),
          signOptions: { expiresIn: '30s' }
        }
      },
      inject: [ConfigService]
    }),
  
  ],
  controllers: [AuthController],
  providers: [AuthService, ApikeyService, JwtService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).exclude('users').forRoutes('*')
  }
}
