import { Request, Response } from 'express';

import { HttpStatus } from '../../../common/domain';
import { HttpExceptionSender } from '../../../common/infrastructure';

import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {
    try {
      const result = await this.userRegistrar.run(req.body);

      res.status(HttpStatus.CREATED).json( result );

    } catch (error) {
      HttpExceptionSender.run(res, error);
    }
  }

}
