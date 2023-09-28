import { Request, Response } from 'express';

import { ValidationError } from '../../../common/domain';
import { HttpException, HttpStatus } from '../../../common/infrastructure';
import { UniqueEmailError } from '../../../users/domain';

import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {
    try {
      await this.userRegistrar.run(req.body);

      res.sendStatus(HttpStatus.CREATED);

    } catch (error) {

      if ( error instanceof ValidationError ) {
        HttpException.sendValidationError(res, error);
        return;
      }

      if ( error instanceof UniqueEmailError ) {
        HttpException.sendBadRequest( res, {
          code: 'unique-email',
          detail: error.message
        });
        return;
      }

      HttpException.sendInternalServerError(res, error);
    }
  }

}
