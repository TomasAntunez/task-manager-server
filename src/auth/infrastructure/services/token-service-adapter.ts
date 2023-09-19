import { TokenService, Payload } from '../../domain';


export class TokenServiceAdapter implements TokenService {
  
  createValidationToken(): string {
    throw new Error('Method not implemented.');
  }

  createAccessToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(payload: Payload): string {
    throw new Error('Method not implemented.');
  }
  
}
