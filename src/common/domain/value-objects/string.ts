import { BaseValueObject } from './base-value-object';


export class StringValueObject extends BaseValueObject<string> {

  constructor( value: string, name: string ) {
    super(value, name);

    if ( typeof this.value !== 'string' ) {
      throw new Error(`${ this.name } must be a string`);
    }

    this.value = this.value.trim();

    if ( this.value === '' ) {
      throw new Error(`${ this.name } cannot be an empty string`);
    }

  }

}
