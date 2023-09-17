import { User, UserWritingRepository, CreateUserParams } from '../domain';
import { UsersMock } from './users-mock';


export class InMemoryUserWritingRepository implements UserWritingRepository {

  constructor( private readonly mock: UsersMock ) {}


  async create(createUserParams: CreateUserParams): Promise<User> {
    throw new Error('Method not implemented.');
  }
  
  update(): Promise<User> {
    throw new Error('Method not implemented.');
  }

}
