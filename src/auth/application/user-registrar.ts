import { IdService } from '@/common/domain';
import {
  UserWritingRepository, UserReadingRepository, CreateUserResult, UniqueEmailException
} from '@/users/domain';

import { RegisterUserDto, EncryptionService, TokenService } from '../domain';


interface UserRegistrarProps {
  userReadingRepository : UserReadingRepository;
  userWritingRepository : UserWritingRepository;
  idService             : IdService;
  encryptionService     : EncryptionService;
  tokenService          : TokenService;
}


export class UserRegistrar {

  private readonly userReadingRepository : UserReadingRepository;
  private readonly userWritingRepository : UserWritingRepository;
  private readonly idService             : IdService;
  private readonly encryptionService     : EncryptionService;
  private readonly tokenService          : TokenService;


  constructor({
    userReadingRepository,
    userWritingRepository,
    idService,
    encryptionService,
    tokenService
  }: UserRegistrarProps) {
    this.userReadingRepository = userReadingRepository;
    this.userWritingRepository = userWritingRepository;
    this.idService             = idService;
    this.encryptionService     = encryptionService;
    this.tokenService          = tokenService;
  }


  async run( registerUserDto: RegisterUserDto ): Promise<CreateUserResult> {
    

    const user = await this.userReadingRepository.findByEmail(registerUserDto.email);

    if (user) throw new UniqueEmailException(user.email);


    return await this.userWritingRepository.create({
      id: this.idService.createUUID(),
      email: registerUserDto.email,
      username: registerUserDto.username,
      password: this.encryptionService.hashSync(registerUserDto.password),
      validationToken: this.tokenService.createValidationToken()
    });

  }

}
