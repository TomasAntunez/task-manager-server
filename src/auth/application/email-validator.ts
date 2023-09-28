import { UserRepository, NotFoundByValidationTokenException } from '../../users/domain';

import { ValidateEmailDto, ValidateEmailDtoProps } from '../domain';


export class EmailValidator {

  constructor( private readonly userRepository: UserRepository ) {}


  async run( validateEmailDtoProps: ValidateEmailDtoProps ) {

    const validateEmailDto = new ValidateEmailDto(validateEmailDtoProps);

    await validateEmailDto.validate();


    const user = await this.userRepository.findByValidationToken(validateEmailDto.validationToken);

    if (!user) throw new NotFoundByValidationTokenException();


    user.credentials.emailValidated = true;
    user.validationToken.token = null;
    user.updatedAt = new Date();

    await this.userRepository.save(user);

  }


}
