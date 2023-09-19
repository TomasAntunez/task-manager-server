

export interface ValidationTokenProps {
  token: string;
  expiration?: Date | null;
}

export class ValidationToken {

  token: string;
  expiration: Date | null;


  constructor({ token, expiration }: ValidationTokenProps) {
    this.token      = token;
    this.expiration = expiration || null;
  }

}
