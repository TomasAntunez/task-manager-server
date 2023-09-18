import { EncryptionService } from '../../domain';


export class BcryptAdapter implements EncryptionService {
  
  hashSync(dataToHash: string): string {
    return 'data-hashed';
  }
  compareSync(hashedData: string, dataToCompare: string): boolean {
    throw new Error('Method not implemented.');
  }
  
}
