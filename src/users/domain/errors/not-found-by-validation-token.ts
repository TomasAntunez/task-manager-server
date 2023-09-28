
export class NotFoundByValidationTokenException extends Error {
  constructor() {
    super(`Invalid token`);
  }
}
