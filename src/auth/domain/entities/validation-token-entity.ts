

export interface ValidationTokenProps {
  token: string | null;
  expiration: Date | null;
}

export class ValidationToken {

  token: string | null;
  expiration: Date | null;


  constructor({ token, expiration }: ValidationTokenProps) {
    this.token      = token;
    this.expiration = expiration;
  }

}
