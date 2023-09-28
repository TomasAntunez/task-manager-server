import { BaseDto, ValidationError } from '../../../common/domain';

import { ValidationTokenValueObject } from '../value-objects'


export interface ValidateEmailDtoProps {
  validationToken: string;
}


export class ValidateEmailDto extends BaseDto {

  validationToken: string;


  constructor({ validationToken }: ValidateEmailDtoProps) {
    super();

    this.validationToken = validationToken;
  }


  async validate(): Promise<void> {

    this.validationToken = this.handleError( ValidationTokenValueObject, this.validationToken );

    if ( this.errors.length > 0 ) throw new ValidationError(this.errors);

  }

}
