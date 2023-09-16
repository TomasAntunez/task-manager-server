import { Response } from 'express';

import { Exception } from '../../domain';
import { HttpStatus } from './http-status';


interface HttpExceptionProps {
  readonly status       : number;
  readonly code         : string;
  readonly description? : string;
}

export class HttpException extends Exception {

  public readonly status: HttpStatus;


  constructor( props: HttpExceptionProps ) {
    super(props.code, props.description);
    this.status= props.status;
  }


  static send( res: Response, error: unknown ) {

    if ( error instanceof HttpException ) {
      return res.status(error.status).json({
        code: error.code,
        description: error.description
      });
    }

    console.log(error);

    const internalServerError = new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'internal-server-error'
    })

    return res.status(internalServerError.status).json({
      code: internalServerError.code
    })

  }

}
