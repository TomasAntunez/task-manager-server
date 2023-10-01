import { FileLocation } from './file-locations';


export interface FileProps<T = any> {
  name     : string;
  location : FileLocation;
  content  : T;
}

export class File<T = any> {

  name     : string;
  location : FileLocation;
  content  : T;


  constructor( { name, location, content }: FileProps<T> ) {
    this.name     = name;
    this.location = location;
    this.content  = content;
  }

}
