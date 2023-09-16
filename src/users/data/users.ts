import { v4 as uuid } from 'uuid';

import { UserInMemory } from './user-in-memory-entity';


export const usersMock: Array<UserInMemory> = [
  {
    id: uuid(),
    email: 'test1@email.com',
    username: 'tes1',
    password: '123456',
    emailValidated: false,
    validationToken: null,
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: uuid(),
    email: 'test2@email.com',
    username: 'tes2',
    password: '123456',
    emailValidated: true,
    validationToken: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
