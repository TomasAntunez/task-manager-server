import { StringValueObject } from '../../../common/domain';


export class EmailValueObject extends StringValueObject {

  constructor( value: string ) {
    super(value, 'email');

    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( !regExp.test(this.value) ) {
      throw new Error(`${ this.name } must be valid`);
    }

  }

}
