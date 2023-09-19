import { Session } from "../entities";


export interface SessionReadingRepository {
  findSessionByAccessToken(): Promise<Session>;
}
