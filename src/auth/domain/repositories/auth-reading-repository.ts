import { Session } from "../entities";


export interface AuthReadingRepository {
  getSessionByAccessToken(): Session
}
