import { Response } from 'express';

import { Exception, InternalServerErrorException } from '../../domain';


export class HttpExceptionSender {

  static run( res: Response, error: any ) {

    if ( error instanceof Exception ) {
      return res.status(error.status).json({
        code: error.code,
        detail: error.detail
      });
    }

    console.log(error);

    const internalServerError = new InternalServerErrorException();

    return res.status(internalServerError.status).json({
      code: internalServerError.code
    });
    
  }

}
