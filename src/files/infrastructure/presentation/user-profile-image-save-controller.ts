import { Request, Response } from 'express';

import { HttpException, HttpStatus } from '../../../common/infrastructure';

import { UserProfileImageSaver } from '../../application';



export class UserProfileImageSaveController {

  constructor( private readonly userProfileImageSaver: UserProfileImageSaver ) {}


  async run( req: Request, res: Response ) {
    try {


      // await this.userProfileImageSaver.run();

      res.sendStatus(HttpStatus.CREATED);

    } catch (error) {

      

      HttpException.sendInternalServerError(res, error);
    }
  }

}
