import { config } from 'dotenv';

config();


export const env = {
  auth: {
    VALIDATION_TOKEN_LENGTH: Number(process.env.VALIDATION_TOKEN_LENGTH) || 30
  },
  aws: {
    S3_BUCKET_REGION: process.env.AWS_S3_BUCKET_REGION!,
    S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME!,
    S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY!,
    S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY!
  }
};
