import { FileLocation } from './file-locations';


export interface FileProps {
  name     : string;
  location : FileLocation;
  content  : any;
}

export class File<T = any> {

  name     : string;
  location : FileLocation;
  content  : T;


  constructor( { name, location, content }: FileProps ) {
    this.name     = name;
    this.location = location;
    this.content  = content;
  }

}
