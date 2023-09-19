import { EncryptionService, TokenService, ValidationToken } from '../../auth/domain';
import { IdService } from '../../common/domain';

import { User } from '../domain';


interface UsersMockProps {
  idService         : IdService;
  encryptionService : EncryptionService;
  tokenService      : TokenService;
}


export class UsersMock {
  
  private readonly idService         : IdService;
  private readonly encryptionService : EncryptionService;
  private readonly tokenService      : TokenService;
  
  readonly userList: Array<User>;


  constructor({
    idService,
    encryptionService,
    tokenService
  }: UsersMockProps) {
    this.idService         = idService;
    this.encryptionService = encryptionService;
    this.tokenService      = tokenService;

    this.userList = this.createUsers();
  }


  private createUsers(): Array<User> {
    return [
      new User({
        id: this.idService.createUUID(),
        email: 'test1@email.com',
        username: 'test1',
        password: this.encryptionService.hashSync('123456'),
        emailValidated: false,
        createdAt: new Date(),
        updatedAt: null,
        validationToken: {
          token: this.tokenService.createValidationToken()
        }
      }),
      new User({
        id: this.idService.createUUID(),
        email: 'test2@email.com',
        username: 'test2',
        password: this.encryptionService.hashSync('123456'),
        emailValidated: false,
        createdAt: new Date(),
        updatedAt: null,
        validationToken: {
          token: this.tokenService.createValidationToken()
        }
      }),
    ]
  }


}
