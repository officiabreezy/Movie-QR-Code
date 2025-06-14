import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3001;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setBaseViewsDir(join(__dirname, '..', 'src', 'templates'));
    app.setViewEngine('ejs');

    await app.listen(port);
    console.log(`Server is running on http://localhost:${port}`);
};
bootstrap().catch((error) => {
    console.error('Error starting the application:', error);
});