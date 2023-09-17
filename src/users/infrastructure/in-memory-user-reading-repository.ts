import { User, UserReadingRepository } from '../domain';
import { UsersMock } from './users-mock';


export class InMemoryUserReadingRepository implements UserReadingRepository {

  constructor( private readonly mock: UsersMock ) {}


  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  
}
