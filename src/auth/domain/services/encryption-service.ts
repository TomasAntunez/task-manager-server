
export interface EncryptionService {
  hashSync( dataToHash: string ): string;
  compareSync( hashedData: string, dataToCompare: string ): boolean;
}
