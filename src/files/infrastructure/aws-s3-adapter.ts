import { S3Client, PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';

import { env } from '../../common/domain';

import { FileLocation, FileProps, FilesService, File } from '../domain';


export class AWSS3Adapter implements FilesService {

  private readonly bucketName = env.aws.S3_BUCKET_NAME;

  private readonly s3Client = new S3Client({
    region: env.aws.S3_BUCKET_REGION,
    credentials: {
      accessKeyId: env.aws.S3_ACCESS_KEY,
      secretAccessKey: env.aws.S3_SECRET_ACCESS_KEY
    }
  });



  createImage( fileProps: FileProps ): File {
    return new File(fileProps);
  }


  async saveImage( file: File ): Promise<void> {
    
    const { name, location, content } = file as File<Express.Multer.File>;

    const fileType = content.mimetype.split('/')[1];

    const params: PutObjectCommandInput = {
      Bucket: this.bucketName,
      Key: `${ location }/${ name }.${ fileType }`,
      Body: content.buffer,
      ContentType: content.mimetype
    };

    const command = new PutObjectCommand(params);
    
    await this.s3Client.send(command);

  }


  getImage<T>( name: string, location: FileLocation ): Promise<T> {
    throw new Error('Method not implemented.');
  }

}
