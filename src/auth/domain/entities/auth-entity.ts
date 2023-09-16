import { Session } from './session-entity';


export interface Auth {
  password: string;
  emailValidated: boolean;
  validationToken: string | null;
  sessions: Array<Session>;
}
