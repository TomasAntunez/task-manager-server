

declare namespace Express {
  export interface Request {
    file?: Express.Multer.File;
    files?: Array<Express.Multer.File>;
  }
}
