import { v4 as uuid } from 'uuid';

import { IdService } from '../domain';


export class IdServiceAdapter implements IdService {
  
  createUUID(): string {
    return uuid();
  }
  
}
