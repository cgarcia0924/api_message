import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DevopsModule } from './modules/devops/devops.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import {HttpExceptionFilter} from './http-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = new DocumentBuilder()
    .setTitle('Api Neoris - Carlos Garcia Chacon ')
    .setDescription('Api Documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        bearerFormat: 'JWT',
        type: 'http',
      },
      'jwt',
    )
    .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/', app, document);
  const catDocument = SwaggerModule.createDocument(app, config, {
    include: [DevopsModule, AuthModule, UsersModule], // don't include, say, BearsModule
  });
  SwaggerModule.setup('/', app, catDocument);  
  await app.listen(3000);
}
bootstrap();
