import { Request, Response, NextFunction } from 'express';
import multer, { Options, MulterError } from 'multer';

import { HttpException } from '../../../common/infrastructure';


export const imagesAllowedMimetypes = [ 'image/jpg', 'image/jpeg', 'image/png' ];


interface UploadFileProps {
  fileSizeInBytes?  : number;
  allowedMimetypes? : Array<string>;
  fieldName         : string;
  req               : Request,
  res               : Response,
  next              : NextFunction
}


export class MulterHandler {

  private readonly multer = multer;


  private getConfig(
    fileSizeInBytes: number = 100000,
    allowedMimetypes: Array<string> = imagesAllowedMimetypes
  ): Options {
    return {
      limits: { fileSize: fileSizeInBytes },
      storage: this.multer.memoryStorage(),
      fileFilter( _req, file, callback ) {
        if ( allowedMimetypes.includes(file.mimetype) ) {
          return callback( null, true );
        }
        return callback(
          new Error(`The file format must be ${ allowedMimetypes.join() }`)
        );
      }
    };
  }


  uploadFile({
    fileSizeInBytes,
    allowedMimetypes,
    fieldName,
    req,
    res,
    next
  }: UploadFileProps) {

    const multerConfig = this.getConfig( fileSizeInBytes, allowedMimetypes);

    const upload = this.multer(multerConfig).single(fieldName);

    upload( req, res, function(error) {
      if (!error) return next();

      if ( error instanceof MulterError ) {
        if ( error.code === 'LIMIT_FILE_SIZE' ) {
          HttpException.sendBadRequest(res, {
            code: 'file-too-large',
            detail: 'The file is too large'
          });
          return;
        }
      }

      if ( error instanceof Error && error.message ) {
        HttpException.sendBadRequest(res, {
          code: 'invalid-file-format',
          detail: error.message
        });
        return;
      }

      HttpException.sendInternalServerError(res, error);
    });
    
  }

}