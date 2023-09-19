import { IdService } from '../../common/domain';
import { UserRepository, UniqueEmailError } from '../../users/domain';

import { EncryptionService, RegisterUserDto, TokenService } from '../domain';


interface UserRegistrarProps {
  userRepository    : UserRepository;
  idService         : IdService;
  encryptionService : EncryptionService;
  tokenService      : TokenService;
}


export class UserRegistrar {

  private readonly userRepository    : UserRepository;
  private readonly idService         : IdService;
  private readonly encryptionService : EncryptionService;
  private readonly tokenService      : TokenService;


  constructor({
    userRepository,
    idService,
    encryptionService,
    tokenService
  }: UserRegistrarProps) {
    this.userRepository    = userRepository;
    this.idService         = idService;
    this.encryptionService = encryptionService;
    this.tokenService      = tokenService;
  }


  async run( registerUserDto: RegisterUserDto ): Promise<void> {

    const existingUser = await this.userRepository.findByEmail(registerUserDto.email);

    if (existingUser) throw new UniqueEmailError(existingUser.email);


    const user = this.userRepository.create({
      id: this.idService.createUUID(),
      email: registerUserDto.email,
      username: registerUserDto.username,
      password: this.encryptionService.hashSync(registerUserDto.password),
      emailValidated: false,
      createdAt: new Date(),
      updatedAt: null,
      validationToken: {
        token: this.tokenService.createValidationToken()
      }
    });


    await this.userRepository.save(user);

  }

}
