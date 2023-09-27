
export interface EncryptionService {
  hashSync( dataToHash: string ): string;
  compareSync( dataToCompare: string, hashedData: string ): boolean;
}
