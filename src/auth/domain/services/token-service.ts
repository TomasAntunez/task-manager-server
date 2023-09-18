import { User } from '../../../users/domain';


export type Payload = Pick<User, 'id'>

export interface TokenService {
  createAccessToken( payload: Payload ): string;
  createRefreshToken( payload: Payload ): string;
  createValidationToken(): string;
}
