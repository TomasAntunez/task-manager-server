import { Request, Response } from 'express';

import { ValidationError } from '../../../common/domain';
import { HttpException, HttpStatus } from '../../../common/infrastructure';
import { UniqueEmailError } from '../../../users/domain';

import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {
    try {
      const result = await this.userRegistrar.run(req.body);

      res.status(HttpStatus.CREATED).json( result );

    } catch (error) {

      if ( error instanceof ValidationError ) {
        return HttpException.sendValidationError(res, error);
      }

      if ( error instanceof UniqueEmailError ) {
        return HttpException.sendBadRequest( res, {
          code: 'unique-email',
          detail: error.message
        });
      }

      HttpException.sendInternalServerError(res, error);
    }
  }

}
