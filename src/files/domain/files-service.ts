import { File, FileProps } from './file-entity';
import { FileLocation } from './file-locations';


export interface FilesService {
  createImage( fileProps: FileProps ): File;
  saveImage( file: File ): Promise<void>;
  getImage( name: string, location: FileLocation ): Promise<any>;
}
