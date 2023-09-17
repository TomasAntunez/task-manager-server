import { Exception } from './exception';
import { HttpStatus } from './http-status';


export class InternalServerErrorException extends Exception {
  constructor( code: string = 'internal-server-error' ) {
    super({
      code,
      status: HttpStatus.INTERNAL_SERVER_ERROR
    })
  }
}
