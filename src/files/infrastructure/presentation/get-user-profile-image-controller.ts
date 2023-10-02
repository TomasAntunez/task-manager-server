import { Request, Response } from 'express';

import { HttpException, HttpStatus } from '../../../common/infrastructure';

import { UserProfileImageGetter } from '../../application';



export class GetUserProfileImageController {

  constructor( private readonly userProfileImageGetter: UserProfileImageGetter ) {}


  async run( req: Request, res: Response ) {
    try {
      const url = await this.userProfileImageGetter.run<string>(req.params.fileName);
      res.status(HttpStatus.OK).json(url);

    } catch (error) {
      HttpException.sendInternalServerError(res, error);
    }
  }

}
