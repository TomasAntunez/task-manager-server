import { UserReadingRepository, UserExceptionThrower } from '@/users/domain';

import { AuthenticateUserDto, EncryptionService } from '../domain';


interface UserAuthenticatorProps {
  readonly userReadingRepository: UserReadingRepository;
  readonly userExceptionThrower: UserExceptionThrower;
  readonly encryptionService: EncryptionService;
}

export class UserAuthenticator {

  private readonly userReadingRepository: UserReadingRepository;
  private readonly userExceptionThrower: UserExceptionThrower;
  private readonly encryptionService: EncryptionService;


  constructor({
    userReadingRepository,
    userExceptionThrower,
    encryptionService
  }: UserAuthenticatorProps) {
    this.userReadingRepository = userReadingRepository;
    this.userExceptionThrower = userExceptionThrower;
    this.encryptionService = encryptionService;
  }


  async run( authenticateUserDto: AuthenticateUserDto ) {

    const user = await this.userReadingRepository.findByEmail(authenticateUserDto.email);

    if ( !user ) {
      throw this.userExceptionThrower.getNotFoundByEmail(authenticateUserDto.email);
    }

    

  }

}
