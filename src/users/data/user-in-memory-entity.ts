import { Auth } from '@/auth/domain';

import { User } from '../domain';


export type UserInMemory = User & Omit<Auth, 'sessions'>
