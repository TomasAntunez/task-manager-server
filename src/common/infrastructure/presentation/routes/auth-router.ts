import { Router } from 'express';

import { registerController, validateEmailController } from '../../../../dependencies';


const authRouter = Router();


authRouter.post( '/register', (req, res) => registerController.run(req, res) );

authRouter.get( '/validate-email/:validationToken',
  (req, res) => validateEmailController.run(req, res)
);


export { authRouter };
