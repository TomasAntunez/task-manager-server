import { EncryptionService } from '../../domain';


export class BcryptAdapter implements EncryptionService {
  
  hashSync(dataToHash: string): string {
    throw new Error('Method not implemented.');
  }
  compareSync(hashedData: string, dataToCompare: string): boolean {
    throw new Error('Method not implemented.');
  }
  
}
