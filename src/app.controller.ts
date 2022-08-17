import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
type File = Express.Multer.File;

import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { JwtAuthGuard } from './core/jwt/jwt-auth.guard';
import { imageDiskStorage } from './utils/uplod/image-disk-stora';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create/image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', imageDiskStorage))
  create(@UploadedFile() file: File) {
    return 'upload/' + file?.filename;
  }
}
