import {
  UserWritingRepository, UserReadingRepository, UniqueEmailException
} from '../../users/domain';

import { RegisterUserDto } from '../domain';


export class UserRegistrar {

  constructor(
    private readonly userReadingRepository : UserReadingRepository,
    private readonly userWritingRepository : UserWritingRepository
  ) {}


  async run( registerUserDto: RegisterUserDto ) {

    const user = await this.userReadingRepository.findByEmail(registerUserDto.email);

    if (user) throw new UniqueEmailException(user.email);


    return await this.userWritingRepository.create({ ...registerUserDto });

  }

}
