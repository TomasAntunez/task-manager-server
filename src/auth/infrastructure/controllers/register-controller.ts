import { Request, Response } from 'express';

import { HttpStatus } from '../../../common/domain';
import { HttpExceptionSender } from '../../../common/infrastructure';
import { UniqueEmailError } from '../../../users/domain';

import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {
    try {
      const result = await this.userRegistrar.run(req.body);

      res.status(HttpStatus.CREATED).json( result );

    } catch (error) {

      if ( error instanceof UniqueEmailError ) {
        return res.status(400).json(':(');
      }

      HttpExceptionSender.run(res, error);
    }
  }

}
