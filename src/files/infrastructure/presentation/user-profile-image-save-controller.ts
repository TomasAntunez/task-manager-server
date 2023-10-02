import { Request, Response } from 'express';

import { HttpException, HttpStatus } from '../../../common/infrastructure';

import { FileNotExistsError } from '../../domain';
import { UserProfileImageSaver } from '../../application';



export class UserProfileImageSaveController {

  constructor( private readonly userProfileImageSaver: UserProfileImageSaver ) {}


  async run( req: Request, res: Response ) {
    try {
      await this.userProfileImageSaver.run(req.file);
      res.sendStatus(HttpStatus.CREATED);

    } catch (error) {
      if (error instanceof FileNotExistsError) {
        HttpException.sendBadRequest(res, {
          code: 'file-not-exists',
          detail: error.message
        });
        return;
      }

      HttpException.sendInternalServerError(res, error);
    }
  }

}
