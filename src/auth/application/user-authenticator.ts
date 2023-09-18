import { UserReadingRepository } from '../../users/domain';

import { EncryptionService } from '../domain';


interface UserAuthenticatorProps {
  readonly userReadingRepository: UserReadingRepository;
  readonly encryptionService: EncryptionService;
}

export class UserAuthenticator {

  private readonly userReadingRepository: UserReadingRepository;
  private readonly encryptionService: EncryptionService;


  constructor({
    userReadingRepository,
    encryptionService
  }: UserAuthenticatorProps) {
    this.userReadingRepository = userReadingRepository;
    this.encryptionService = encryptionService;
  }


  // async run( authenticateUserDto: AuthenticateUserDto ) {

  //   const user = await this.userReadingRepository.findByEmail(authenticateUserDto.email);

  //   if ( !user ) {
  //     throw this.userExceptionThrower.getNotFoundByEmail(authenticateUserDto.email);
  //   }

    

  // }

}
