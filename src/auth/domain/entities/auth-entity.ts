import { Session } from './session-entity';


export class Auth {
  password        : string         = '';
  validationToken : string | null  = null;
  sessions        : Array<Session> = [];
  emailValidated  : boolean        = false;
}
