import { User, UserProps } from "../user-entity";


export type CreateUserParams = UserProps;

export type CreateUserResult = User;


export interface UserWritingRepository {
  create( createUserParams: CreateUserParams ): Promise<CreateUserResult>;
  update(): Promise<User>;
}
