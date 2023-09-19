

export class BaseValueObject<T> {
  
  constructor(
    public value: T,
    public name: string
  ) {

    if ( typeof this.value === 'undefined' ) {
      throw new Error(`${ this.name } is required`);
    }

  }

}
