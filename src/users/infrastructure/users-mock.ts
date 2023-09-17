import { IdService } from '@/common/domain';
import { EncryptionService, TokenService } from '@/auth/domain';

import { User } from '../domain';


interface UsersMockProps {
  idService         : IdService;
  encryptionService : EncryptionService;
  tokenService      : TokenService;
}


export class UsersMock {

  public userList: Array<User> = this.getTestUsers();

  private readonly idService         : IdService;
  private readonly encryptionService : EncryptionService;
  private readonly tokenService      : TokenService;


  constructor({ idService, tokenService, encryptionService }: UsersMockProps) {
    this.idService         = idService;
    this.encryptionService = encryptionService;
    this.tokenService      = tokenService;
  }


  private getTestUsers() {
    return [
      new User({
        id: this.idService.createUUID(),
        email: 'test1@email.com',
        username: 'test1',
        password: this.encryptionService.hashSync('123456'),
        validationToken: this.tokenService.createValidationToken()
      }),
      new User({
        id: this.idService.createUUID(),
        email: 'test2@email.com',
        username: 'test2',
        password: this.encryptionService.hashSync('123456'),
        validationToken: this.tokenService.createValidationToken()
      })
    ];
  }

}
