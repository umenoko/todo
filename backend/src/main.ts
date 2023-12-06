import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  // HACK: Windows / wsl2 / ubuntu でも80ポートでlistenする方法を検討する。
  await app.listen(5000);
}
bootstrap();
