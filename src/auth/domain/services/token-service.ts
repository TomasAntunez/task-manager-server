
export interface Payload {
  id: string;
}


export interface TokenService {
  createAccessToken( payload: Payload ): string;
  createRefreshToken( payload: Payload ): string;
  createValidationToken(): string;
}
