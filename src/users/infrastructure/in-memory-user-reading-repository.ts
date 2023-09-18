import { UserReadingRepository, FindByEmailResult } from '../domain';
import { UsersMock } from './users-mock';


export class InMemoryUserReadingRepository implements UserReadingRepository {

  constructor( private readonly mock: UsersMock ) {}


  async findByEmail(email: string): Promise<FindByEmailResult> {
    const user = this.mock.userList.find( user => user.email === email );
    return user ? user : null;
  }
  
}
