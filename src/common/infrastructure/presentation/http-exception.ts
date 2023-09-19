import { Response } from 'express';

import { ValidationError } from '../../domain';

import { HttpStatus } from './http-status';


export interface Exception {
  code: string;
  detail: string | Array<string>;
}


export class HttpException {


  static handleValidationError( res: Response, error: unknown ) {

    if ( error instanceof ValidationError ) {
      return this.sendBadRequest( res, {
        code: 'validation-error',
        detail: error.messages
      });
    }

    this.sendInternalServerError( res, error );

  }


  static sendBadRequest( res: Response, exception: Exception ) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(exception)
  }


  static sendNotFound( res: Response, exception: Exception ) {
    return res
      .status(HttpStatus.NOT_FOUND)
      .json(exception);
  }


  static sendInternalServerError( res: Response, error: unknown ) {

    console.log(error);

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ code: 'internal-server-error' });
  }

}
