import {
  S3Client, PutObjectCommand, PutObjectCommandInput, GetObjectCommand, GetObjectCommandInput
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

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
    
    const params: PutObjectCommandInput = {
      Bucket: this.bucketName,
      Key: `${ location }/${ name }`,
      Body: content.buffer,
      ContentType: content.mimetype
    };
    
    const command = new PutObjectCommand(params);
    
    await this.s3Client.send(command);
    
  }
  
  
  async getImage(name: string, location: FileLocation): Promise<string> {

    const params: GetObjectCommandInput = {
      Bucket: this.bucketName,
      Key: `${ location }/${ name }`
    };

    const command = new GetObjectCommand(params);

    return await getSignedUrl( this.s3Client, command, { expiresIn: 3600 } );
  }
  
}
