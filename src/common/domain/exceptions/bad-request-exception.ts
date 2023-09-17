import { Exception } from './exception';
import { HttpStatus } from './http-status';


export class BadRequestException extends Exception {
  constructor( code: string = 'bad-request', detail?: any ) {
    super({
      code,
      detail,
      status: HttpStatus.BAD_REQUEST,
    })
  }
}
