import { BaseEntity } from '@/common/domain';


export interface User extends BaseEntity {
  username: string;
  email: string;
}
