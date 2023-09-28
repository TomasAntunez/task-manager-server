import { UserRepository, User } from '../domain';
import { UserProps } from '../domain/user-entity';
import { UsersMock } from './users-mock';


export class InMemoryUserRepository implements UserRepository {

  constructor( private mock: UsersMock ) {}


  create(userProps: UserProps): User {
    return new User(userProps);
  }


  async save(user: User): Promise<void> {

    if ( user.updatedAt ) {
      this.mock.userList = this.mock.userList.map( persistedUser => {

        if ( user.id === persistedUser.id ) {
          return user;
        }

        return persistedUser;
      });
      return;
    }

    this.mock.userList.push(user);
  }


  async findByEmail(email: string): Promise<User | null> {
    const user = this.mock.userList.find( user => user.credentials.email === email );

    if (!user) return null;

    return new User(user);
  }


  async findByValidationToken(token: string): Promise<User | null> {
    const user = this.mock.userList.find( user => user.validationToken.token === token );

    if (!user) return null;

    return new User(user);
  }

}
