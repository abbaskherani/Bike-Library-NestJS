import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Bootstrap function to set up and start the NestJS application
 */

async function bootstrap() {
  // Create a new NestJS application instance
  const app = await NestFactory.create(AppModule);


  // Set up Swagger documentation
    const config = new DocumentBuilder()
      .setTitle('Bike Library API')
      .setDescription('API for managing a bike library')
      .setVersion('1.0')
      .addTag('bikes')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  
    await app.listen(3000);
}
bootstrap();