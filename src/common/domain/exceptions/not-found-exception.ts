import { Exception } from './exception';
import { HttpStatus } from './http-status';


export class NotFoundException extends Exception {
  constructor( code: string = 'not-found', detail?: any ) {
    super({
      code,
      detail,
      status: HttpStatus.NOT_FOUND,
    })
  }
}
