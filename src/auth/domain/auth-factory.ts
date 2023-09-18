import { Auth } from './entities';
import { EncryptionService, TokenService } from './services';


export class AuthFactory {

  constructor(
    private readonly encryptionService: EncryptionService,
    private readonly tokenService: TokenService
  ) {}


  create( password: string ) {
    const auth = new Auth();

    auth.validationToken = this.tokenService.createValidationToken();
    auth.password = this.encryptionService.hashSync(password);

    return auth;
  }


  createEmpty() {
    return new Auth();
  }

}
