import { NotFoundException } from '@/common/domain';

import { UserExceptionCode } from './user-exception-codes';


export class NotFoundByEmailException extends NotFoundException {
  constructor( email: string ) {
    super(
      UserExceptionCode.NOT_FOUND_BY_EMAIL,
      `The user with the email "${ email }" was not found`
    )
  }
}
