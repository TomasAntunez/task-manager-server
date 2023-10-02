

export class FileNotFoundError extends Error {
  constructor( name: string ) {
    super(`File "${ name }" not found`);
  }
}
