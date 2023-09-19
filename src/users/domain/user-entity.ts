import { BaseEntity } from '../../common/domain';
import { ValidationToken, ValidationTokenProps } from '../../auth/domain';


export interface UserProps {
  id               : string;
  email            : string;
  username         : string;
  password         : string;
  emailValidated   : boolean;
  createdAt        : Date;
  updatedAt        : Date | null;
  validationToken  : ValidationTokenProps;
}


export class User extends BaseEntity {

  email           : string;
  username        : string;
  password        : string;
  emailValidated  : boolean;
  validationToken : ValidationToken


  constructor({
    id,
    email,
    username,
    password,
    emailValidated,
    createdAt,
    updatedAt,
    validationToken
  }: UserProps) {

    super({ id, createdAt, updatedAt });
    this.email           = email;
    this.username        = username;
    this.password        = password;
    this.emailValidated  = emailValidated;
    this.validationToken = new ValidationToken(validationToken);
  }

}
