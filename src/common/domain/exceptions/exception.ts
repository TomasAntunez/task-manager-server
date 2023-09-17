import { HttpStatus } from './http-status';


interface ExceptionProps {
  status: HttpStatus;
  code: string;
  detail?: any;
}

export abstract class Exception {

  readonly status: HttpStatus;
  readonly code: string;
  readonly detail: any;


  constructor({ status, code, detail }: ExceptionProps) {
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
  
}
