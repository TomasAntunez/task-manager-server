

export interface FilesService {
  getImage( name: string ): Promise<string>;
  saveImage( name: string, location: string ): Promise<void>;
}
