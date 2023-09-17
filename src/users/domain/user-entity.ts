import { BaseEntity } from '@/common/domain';
import { Auth } from '@/auth/domain';


export interface UserProps {
  id              : string;
  username        : string;
  email           : string;
  password        : string;
  validationToken : string;
}

export class User extends BaseEntity {

  readonly email    : string;
  readonly username : string;
  readonly auth     : Auth;

  constructor({ id, email, username, password, validationToken }: UserProps) {
    super(id);
    this.email    = email;
    this.username = username;
    this.auth     = new Auth( password, validationToken );
  }

}
