import { randomBytes } from 'crypto';

import { env } from '../../../common/domain';

import { TokenService, Payload } from '../../domain';


export class TokenServiceAdapter implements TokenService {
  
  createValidationToken(): string {
    const tokenLength = env.auth.VALIDATION_TOKEN_LENGTH / 2;
    return randomBytes(tokenLength).toString('hex');
  }

  createAccessToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }
  
}
