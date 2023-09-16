import { User } from '../user-entity';


export interface UserReadingRepository {
  findById(id: string): User;
}
