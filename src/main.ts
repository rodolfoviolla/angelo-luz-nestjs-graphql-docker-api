import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const apiPort = +process.env.API_PORT || 3000;

  await app.listen(apiPort, () => {
    console.log('***************************************************');
    console.log(`            SERVER STARTED ON PORT ${apiPort}`);
    console.log('***************************************************');
  });
}
bootstrap();
