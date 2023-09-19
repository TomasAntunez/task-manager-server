

export class NotFoundByEmailException extends Error {
  constructor( email: string ) {
    super(`The user with the email "${ email }" was not found`);
  }
}
