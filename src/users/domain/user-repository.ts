import { User, UserProps } from "./user-entity";


export interface UserRepository {
  create( userProps: UserProps ): User;
  save( user: User ): Promise<User>;
  findByEmail( email: string ): Promise<User | null>;
}
