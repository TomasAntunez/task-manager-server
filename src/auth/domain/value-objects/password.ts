import { StringValueObject } from '../../../common/domain';


export class PasswordValueObject extends StringValueObject {

  constructor( value: string ) {
    super(value, 'password');

    if ( this.value.length < 6 || this.value.length > 50 ) {
      throw new Error(`${ this.name } can be between 6 and 50 characters`);
    }

  }

}
