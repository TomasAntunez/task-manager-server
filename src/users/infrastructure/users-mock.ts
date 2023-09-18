import { AuthFactory } from '../../auth/domain';

import { UserFactory, User } from '../domain';


interface UserMockProps {
  userFactory: UserFactory,
  authFactory: AuthFactory,
  usersAmount: number
}


export class UsersMock {

  private readonly userFactory: UserFactory;
  private readonly authFactory: AuthFactory;

  readonly userList: Array<User> = [];


  constructor({ authFactory, userFactory, usersAmount }: UserMockProps) {
    this.userFactory = userFactory;
    this.authFactory = authFactory;
    this.createManyUsers(usersAmount);
  }


  private createUser( number: number ) {
    return this.userFactory.create({
      email: `test${ number }@email.com`,
      username: `test${ number }`,
      auth: this.authFactory.create('123456')
    });
  }

  private createManyUsers( amount: number ) {
    for( let i = 1; i <= amount; i++ ) {
      this.userList.push( this.createUser(i) );
    }
    console.log({ userList: this.userList });
  }

}
