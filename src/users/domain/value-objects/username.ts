import { StringValueObject } from '../../../common/domain';


export class UsernameValueObject extends StringValueObject {

  constructor( value: string ) {
    super(value, 'username');

    if ( this.value.length < 3 || this.value.length > 30 ) {
      throw new Error(`${ this.name } can be between 3 and 30 characters`);
    }
    
  }

}
