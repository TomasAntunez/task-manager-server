

export class FileNotExistsError extends Error {
  constructor() {
    super('The file is required');
  }
}
