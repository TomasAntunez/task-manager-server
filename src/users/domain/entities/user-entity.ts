import { BaseEntity } from '../../../common/domain';
import { Auth } from '../../../auth/domain';


export class User extends BaseEntity {

  email    : string = '';
  username : string = '';
  auth     : Auth;

  
  constructor( auth: Auth ) {
    super();
    this.auth = auth;
  }

}
