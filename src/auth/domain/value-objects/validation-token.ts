import { StringValueObject } from '../../../common/domain';


export class ValidationTokenValueObject extends StringValueObject {

  constructor( value: string ) {
    super(value, 'validation token');

    if ( this.value.length !== 30 ) {
      throw new Error(`${ this.name } must be valid`);
    }

  }

}
