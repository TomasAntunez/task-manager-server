import { CreateUserDto, UserWritingRepository, CreationResult } from '@/users/domain';


export class UserRegistrar {

  constructor( private readonly userWritingRepository: UserWritingRepository ) {}

  
  async run( createUserDto: CreateUserDto ): Promise<CreationResult> {
    const result = await this.userWritingRepository.create(createUserDto);
    console.log({ fromUserRegistrar: result })
    return result;
  }

}
