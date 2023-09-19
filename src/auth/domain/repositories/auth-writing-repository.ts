import { Session } from '../entities';


export interface SessionWritingRepository {
  create(): Session;
  save( session: Session ): Promise<Session>;
}
