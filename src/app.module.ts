import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { mongoDb } from './constants/constants';

@Module({
  imports: [MongooseModule.forRoot(mongoDb.url), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
