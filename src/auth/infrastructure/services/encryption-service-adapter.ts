import { hashSync, genSaltSync, compareSync } from 'bcrypt';

import { EncryptionService } from '../../domain';


export class BcryptAdapter implements EncryptionService {
  
  hashSync(dataToHash: string): string {
    const salt = genSaltSync(10);
    return hashSync( dataToHash, salt );
  }
  
  compareSync( dataToCompare: string, hashedData: string ): boolean {
    return compareSync( dataToCompare, hashedData );
  }

}
