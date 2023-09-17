import { v4 as uuid } from 'uuid';

import { IdService } from '../domain';


export class idServiceAdapter implements IdService {

  createUUID(): string {
    return uuid();
  }

}
