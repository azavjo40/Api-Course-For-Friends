import {
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/core/jwt/jwt-auth.guard';
import { imageDiskStorage } from 'src/utils/uplod/image-disk-stora';
import { ImagesService } from './images.service';

type File = Express.Multer.File;

@Controller('image')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', imageDiskStorage))
  create(@UploadedFile() file: File) {
    return 'upload/' + file?.filename;
  }

  @Put('upload/:updateImage')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', imageDiskStorage))
  update(
    @Param('updateImage') updateImage: string,
    @UploadedFile() file: File,
  ) {
    return this.imagesService.update('upload/' + file?.filename, updateImage);
  }

  @Delete('upload/:updateImage')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', imageDiskStorage))
  delete(@Param('updateImage') updateImage: string) {
    return this.imagesService.delete(updateImage);
  }
}
