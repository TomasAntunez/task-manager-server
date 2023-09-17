import { User } from '../user-entity';


export type FindByEmailResult = User;


export interface UserReadingRepository {
  findByEmail(email: string): Promise<FindByEmailResult>;
}
