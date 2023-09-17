import { Session } from './session-entity';


export class Auth {

  readonly sessions: Array<Session> = [];
  readonly emailValidated: boolean = false;


  constructor(
    public readonly password: string,
    public readonly validationToken : string | null
  ) {}

}
