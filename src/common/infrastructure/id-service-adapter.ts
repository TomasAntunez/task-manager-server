import { IdService } from '../domain';


export class IdServiceAdapter implements IdService {

  
  validateUUID(): boolean {
    throw new Error('Method not implemented.');
  }
  
  createUUID(): string {
    return 'new-uuid';
  }
  
}
