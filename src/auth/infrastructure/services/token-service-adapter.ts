import { TokenService, Payload } from '../../domain';


export class TokenServiceAdapter implements TokenService {
  
  createValidationToken(): string {
    return 'new-validation-token';
  }

  createAccessToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }
  
}
