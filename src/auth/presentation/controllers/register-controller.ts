import { Request, Response } from 'express';

import { HttpStatus, HttpException } from '@/common/presentation';
import { EmailUniqueError } from '@/users/domain';

import { UserRegistrar } from '../../application';


export class RegisterController {

  constructor( private readonly userRegistrar: UserRegistrar ) {}


  async run( req: Request, res: Response ) {
    try {
      const result = await this.userRegistrar.run(req.body);

      res.status(HttpStatus.CREATED).json( result );

    } catch (error) {

      if (error instanceof EmailUniqueError) {
        return HttpException.send( res,
          new HttpException({ ...error, status: HttpStatus.BAD_REQUEST })
        );
      }

      HttpException.send(res, error);
    }
  }

}
