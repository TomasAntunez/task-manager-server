import { BaseEntity } from '../../common/domain';
import {
  ValidationToken, ValidationTokenProps, Credentials, CredentialsProps
} from '../../auth/domain';


export interface UserProps {
  id               : string;
  username         : string;
  createdAt        : Date;
  updatedAt        : Date | null;
  credentials      : CredentialsProps;
  validationToken  : ValidationTokenProps;
}


export class User extends BaseEntity {

  username        : string;
  credentials     : Credentials;
  validationToken : ValidationToken


  constructor({
    id,
    username,
    createdAt,
    updatedAt,
    credentials,
    validationToken
  }: UserProps) {

    super({ id, createdAt, updatedAt });

    this.username        = username;
    this.credentials     = new Credentials(credentials);
    this.validationToken = new ValidationToken(validationToken);
  }

}
