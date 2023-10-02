import { Request, Response } from 'express';

import { ValidationError } from '../../../common/domain';
import { HttpException, HttpStatus } from '../../../common/infrastructure';
import { NotFoundByValidationTokenError } from '../../../users/domain';

import { EmailValidator } from '../../application';


export class ValidateEmailController {

  constructor( private readonly emailValidator: EmailValidator ) {}


  async run( req: Request, res: Response ) {
    try {
      await this.emailValidator.run({ validationToken: req.params.validationToken });

      res.sendStatus(HttpStatus.OK);

    } catch (error) {

      if ( error instanceof ValidationError ) {
        return HttpException.sendValidationError(res, error);
      }

      if ( error instanceof NotFoundByValidationTokenError ) {
        return HttpException.sendBadRequest( res, {
          code: 'invalid-validation-token',
          detail: error.message
        });
      }

      HttpException.sendInternalServerError(res, error);
    }
  }

}
