import { Injectable } from '@nestjs/common';
import { stat, unlink, unlinkSync } from 'fs';

@Injectable()
export class ImagesService {
  public update(image: string, updateImage: string) {
    try {
      stat('./upload/' + updateImage, function (err, stats) {
        if (err) return unlinkSync(image);
        unlinkSync('upload/' + updateImage);
      });
      return image;
    } catch (e) {
      console.log(e);
    }
  }

  public delete(updateImage: string) {
    try {
      unlinkSync('upload/' + updateImage);
      return { message: 'Deleted image...' };
    } catch (e) {
      console.log(e);
    }
  }
}
