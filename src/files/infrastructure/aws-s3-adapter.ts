import { FileLocation, FileProps, FilesService, File } from '../domain';


export class AWSS3Adapter implements FilesService {


  createImage( fileProps: FileProps ): File {
    throw new Error('Method not implemented.');
  }


  saveImage( file: File ): Promise<void> {
    throw new Error('Method not implemented.');
  }


  getImage<T>( name: string, location: FileLocation ): Promise<T> {
    throw new Error('Method not implemented.');
  }

}
