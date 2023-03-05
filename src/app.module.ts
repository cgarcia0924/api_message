import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurationAuth from './configuration/configuration-auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevopsModule } from './modules/devops/devops.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationAuth],
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),    
    DevopsModule,
    AuthModule,
    UsersModule
  ],    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
