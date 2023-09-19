import { BaseDto, ValidationError } from '../../../common/domain';
import { UsernameValueObject } from '../../../users/domain';

import { EmailValueObject, PasswordValueObject } from '../value-objects'


export interface RegisterUserDtoProps {
  email    : string;
  username : string;
  password : string;
}


export class RegisterUserDto extends BaseDto {

  email    : string;
  username : string;
  password : string;


  constructor({ username, email, password }: RegisterUserDtoProps) {
    super();

    this.username = username;
    this.email    = email;
    this.password = password;
  }


  async validate(): Promise<void> {

    this.username = this.handleError( UsernameValueObject, this.username );
    this.email = this.handleError( EmailValueObject, this.email );
    this.password = this.handleError( PasswordValueObject, this.password );

    if ( this.errors.length > 0 ) throw new ValidationError(this.errors);

  }

}
