import { Request, Response } from 'express';

import { HttpException, HttpStatus } from '../../../common/infrastructure';
import { UniqueEmailError } from '../../../users/domain';

import { RegisterUserDto } from '../../domain';
import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {

    const registerUserDto = new RegisterUserDto(req.body);

    try {
      await registerUserDto.validate();
    } catch (error) {
      return HttpException.handleValidationError(res, error);
    }


    try {
      const result = await this.userRegistrar.run(registerUserDto);

      res.status(HttpStatus.CREATED).json( result );

    } catch (error) {

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
