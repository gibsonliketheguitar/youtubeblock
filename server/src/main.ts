import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(process.env.SERVER_PORT)

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
