import { v4 as uuid } from 'uuid';

import { EmailUniqueError } from '@/users/domain';

import {
  CreateUserDto, UserWritingRepository, CreationResult, User
} from '../domain';
import { UserInMemory } from './user-in-memory-entity';
import { usersMock } from './users';


export class InMemoryUserWritingRepository implements UserWritingRepository {

  private users: Array<UserInMemory> = usersMock;


  async create(createUserDto: CreateUserDto): Promise<CreationResult> {

    if ( this.users.some( user => user.email === createUserDto.email) ) {
      throw new EmailUniqueError(createUserDto.email);
    }

    const user: CreationResult = {
      id: uuid(),
      email: createUserDto.email,
      username: createUserDto.username
    };

    this.users = [
      ...this.users,
      {
        ...user,
        password: createUserDto.password,
        emailValidated: false,
        validationToken: null,
        createdAt: new Date(),
        updatedAt: null
      }
    ];

    return user;
  }

  update(): Promise<User> {
    throw new Error('Method not implemented.');
  }


}
