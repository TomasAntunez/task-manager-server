import { User } from "../user-entity";
import { CreateUserDto } from '../create-user-dto';


export type CreationResult = Omit<User, 'createdAt'|'updatedAt'>


export interface UserWritingRepository {
  create( createUserDto: CreateUserDto ): Promise<CreationResult>;
  update(): Promise<User>;
}
