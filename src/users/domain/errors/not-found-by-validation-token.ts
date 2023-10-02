
export class NotFoundByValidationTokenError extends Error {
  constructor() {
    super(`Invalid token`);
  }
}
