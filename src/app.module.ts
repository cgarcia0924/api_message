import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevopsModule } from './modules/devops/devops.module';
import configurationAuth from './configuration/configuration-auth';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
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
