import { inMemoryUserWritingRepository } from '@/users/dependencies';

import { UserRegistrar } from './application';
import { RegisterController } from './presentation';


const getComposition = () => {

  const userRegistrar = new UserRegistrar(inMemoryUserWritingRepository);
  const registerController = new RegisterController(userRegistrar);

  return {
    registerController
  };
}


export const { registerController } = getComposition();
