

declare namespace Express {
  export interface Request {
    files: Array<Express.Multer.File>
  }
}
