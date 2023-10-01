import { IdService } from '../../common/domain';
import { UserRepository, UniqueEmailError } from '../../users/domain';

import { EncryptionService, TokenService, RegisterUserDto, RegisterUserDtoProps } from '../domain';


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


  async run( registerUserDtoProps: RegisterUserDtoProps ): Promise<void> {

    const registerUserDto = new RegisterUserDto(registerUserDtoProps);
    
    await registerUserDto.validate();


    const existingUser = await this.userRepository.findByEmail(registerUserDto.email);

    if (existingUser) throw new UniqueEmailError(existingUser.credentials.email);


    const user = this.userRepository.create({
      id: this.idService.createUUID(),
      username: registerUserDto.username,
      profileImageName: null,
      createdAt: new Date(),
      updatedAt: null,
      credentials: {
        email: registerUserDto.email,
        emailValidated: false,
        password: this.encryptionService.hashSync(registerUserDto.password)
      },
      validationToken: {
        token: this.tokenService.createValidationToken(),
        expiration: null
      }
    });


    await this.userRepository.save(user);

  }

}
