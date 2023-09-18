import { Auth } from '../../../auth/domain';

import { User } from "../entities";


export type CreateUserParams = Pick<User, 'username'|'email'> & Pick<Auth, 'password'>
export type UpdateUserParams = Partial<User>;

export type UpdateUserResult = User;


export interface UserWritingRepository {
  create( createUserParams: CreateUserParams ): Promise<User>;
  update( updateUserParams: UpdateUserParams ): Promise<UpdateUserResult>;
}
