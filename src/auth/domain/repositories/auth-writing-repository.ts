import { Session } from '../entities';


export interface AuthWritingRepository {
  createSession(): Session;
  updateSession(): Session;
}
