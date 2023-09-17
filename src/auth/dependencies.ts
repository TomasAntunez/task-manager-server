import { UserRegistrar } from './application';
import { RegisterController } from './infrastructure';


const getComposition = () => {

  const userRegistrar = new UserRegistrar();
  const registerController = new RegisterController(userRegistrar);

  return {
    
  };
}


export const {  } = getComposition();
