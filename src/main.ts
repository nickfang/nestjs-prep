import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Recipes API')
    .setDescription('Recipes API')
    .setVersion('1.0')
    .addTag('recipes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8888);
}
bootstrap();
