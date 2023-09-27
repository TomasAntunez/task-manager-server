import { randomBytes } from 'crypto';

import { TokenService, Payload } from '../../domain';


export class TokenServiceAdapter implements TokenService {
  
  createValidationToken(): string {
    return randomBytes(24).toString('hex');
  }

  createAccessToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }
  
}
