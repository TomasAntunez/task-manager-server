import { BaseValueObject } from './value-objects';


export abstract class BaseDto {

  protected readonly errors: Array<string> = [];


  abstract validate(): Promise<void>;


  protected handleError<T extends BaseValueObject<U>, U>(
    ValueObject: {new ( value: U ): T}, value: U
  ) {
    try {
      return new ValueObject(value).value;
    } catch (error) {
      this.errors.push( (error as Error).message );
      return value;
    }
  }

}
