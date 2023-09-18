import { AuthFactory } from '../../auth/domain';

import { User, UserWritingRepository, CreateUserParams, UserFactory } from '../domain';
import { UsersMock } from './users-mock';


interface InMemoryUserWritingRepositoryProps {
  mock        : UsersMock,
  userFactory : UserFactory,
  authFactory : AuthFactory
}


export class InMemoryUserWritingRepository implements UserWritingRepository {

  readonly mock: UsersMock;

  private readonly userFactory : UserFactory;
  private readonly authFactory : AuthFactory;


  constructor({
    mock,
    authFactory,
    userFactory
  }: InMemoryUserWritingRepositoryProps) {
    this.mock        = mock;
    this.authFactory = authFactory;
    this.userFactory = userFactory;
  }


  async create( createUserParams: CreateUserParams ): Promise<User> {
    throw new Error('Method not implemented.');
  }
  
  async update(updateUserParams: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }

}
