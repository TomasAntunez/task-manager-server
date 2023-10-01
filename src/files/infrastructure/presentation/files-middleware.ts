import { Request, Response, NextFunction } from 'express';

import { MulterHandler } from './multer-handler';


export class FilesMiddleware {

  constructor( private readonly multerHandler: MulterHandler ) {}


  uploadUserProfileImage( req: Request, res: Response, next: NextFunction ) {
    this.multerHandler.uploadFile({ req, res, next, fieldName: 'profileImage' });
  }

}
