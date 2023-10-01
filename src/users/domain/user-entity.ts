import { BaseEntity } from '../../common/domain';
import {
  ValidationToken, ValidationTokenProps, Credentials, CredentialsProps
} from '../../auth/domain';


export interface UserProps {
  id               : string;
  username         : string;
  profileImageName : string | null;
  createdAt        : Date;
  updatedAt        : Date | null;
  credentials      : CredentialsProps;
  validationToken  : ValidationTokenProps;
}


export class User extends BaseEntity {

  username         : string;
  profileImageName : string | null;
  
  readonly credentials     : Credentials;
  readonly validationToken : ValidationToken


  constructor({
    id,
    username,
    profileImageName,
    createdAt,
    updatedAt,
    credentials,
    validationToken
  }: UserProps) {

    super({ id, createdAt, updatedAt });

    this.username        = username;
    this.profileImageName    = profileImageName;
    this.credentials     = new Credentials(credentials);
    this.validationToken = new ValidationToken(validationToken);
  }

}
