import { User, UserProps } from "./user-entity";


export interface UserRepository {
  create( userProps: UserProps ): User;
  save( user: User ): Promise<void>;
  findByEmail( email: string ): Promise<User | null>;
  findByValidationToken( token: string ): Promise<User | null>;
}
