import { User } from '../entities';


export type FindByEmailResult = User | null;


export interface UserReadingRepository {
  findByEmail(email: string): Promise<FindByEmailResult>;
}
