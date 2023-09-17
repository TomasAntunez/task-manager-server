import { BadRequestException } from '@/common/domain';

import { UserExceptionCode } from './user-exception-codes';


export class UniqueEmailException extends BadRequestException {
  constructor( email: string ) {
    super(
      UserExceptionCode.EMAIL_UNIQUE,
      `There cannot be two users with the same email, the email ${ email } already exists`
    )
  }
}
