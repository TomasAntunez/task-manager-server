import { Exception } from '@/common/domain';


enum UserError {
  EMAIL_UNIQUE = 'email-unique'
}

export class EmailUniqueError extends Exception {
  constructor( email: string ) {
    super(
      UserError.EMAIL_UNIQUE,
      `There cannot be two users with the same email, the email ${ email } already exists`
    )
  }
}
