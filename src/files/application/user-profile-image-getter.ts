import { FilesService, FileLocation } from '../domain';


export class UserProfileImageGetter {

  constructor( private readonly filesService: FilesService ) {}


  async run<T>( fileName: string ): Promise<T> {

    return await this.filesService.getImage(fileName, FileLocation.USER_PROFILE_IMAGES);

  }

}
