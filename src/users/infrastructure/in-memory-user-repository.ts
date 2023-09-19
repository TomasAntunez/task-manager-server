import { UserRepository, User } from '../domain';
import { UserProps } from '../domain/user-entity';
import { UsersMock } from './users-mock';


export class InMemoryUserRepository implements UserRepository {

  constructor( private readonly mock: UsersMock ) {}


  create(userProps: UserProps): User {
    return new User(userProps);
  }


  async save(user: User): Promise<User> {
    this.mock.userList.push(user);
    return user;
  }


  async findByEmail(email: string): Promise<User | null> {
    const user = this.mock.userList.find( user => user.email === email );

    if (!user) return null;
  
    return new User(user);
  }

}
