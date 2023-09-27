

export class UniqueEmailError extends Error {
  constructor( email: string ) {
    super(`There cannot be two users with the same email, the email "${ email }" already exists`);
  }
}
