import { IdService } from '../../common/domain';
import { Auth } from '../../auth/domain';

import { User } from './entities';


export interface CreateUser {
  username : string;
  email    : string;
  auth     : Auth;
}


export class UserFactory {

  constructor( private readonly idService: IdService ) {}


  createEmpty( auth: Auth ) {
    return new User( auth );
  }

  create({ username, email, auth }: CreateUser) {
    const user = new User( auth );

    user.id = this.idService.createUUID();
    user.username = username;
    user.email = email;

    return user;
  }

}
