import { StringValueObject, env } from '../../../common/domain';


export class ValidationTokenValueObject extends StringValueObject {

  constructor( value: string ) {
    super(value, 'validation token');

    if ( this.value.length !== env.auth.VALIDATION_TOKEN_LENGTH ) {
      throw new Error(`${ this.name } must be valid`);
    }

  }

}
