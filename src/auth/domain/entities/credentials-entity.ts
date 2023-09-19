

export interface CredentialsProps {
  email: string;
  password: string;
  emailValidated: boolean;
}

export class Credentials {

  email: string;
  password: string;
  emailValidated: boolean;


  constructor({ email, password, emailValidated }: CredentialsProps) {
    this.email = email;
    this.password = password;
    this.emailValidated = emailValidated;
  }

}
