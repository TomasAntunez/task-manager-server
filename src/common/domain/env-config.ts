import { config } from 'dotenv';

config();


export const env = {
  auth: {
    validationTokenLength: Number(process.env.VALIDATION_TOKEN_LENGTH) || 30
  }
};
