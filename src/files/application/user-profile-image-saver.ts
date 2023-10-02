import { IdService } from '../../common/domain';

import { FilesService, FileLocation, FileNotExistsError } from '../domain';


export class UserProfileImageSaver {

  constructor(
    private readonly filesService: FilesService,
    private readonly idService: IdService
  ) {}


  async run( fileContent: any ): Promise<void> {

    if (!fileContent) throw new FileNotExistsError();

    const file = this.filesService.createImage({
      name: this.idService.createUUID(),
      location: FileLocation.USER_PROFILE_IMAGES,
      content: fileContent
    });


    await this.filesService.saveImage(file);
    
  }

}
