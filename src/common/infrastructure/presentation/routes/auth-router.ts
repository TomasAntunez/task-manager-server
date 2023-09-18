import { Router } from 'express';

import { registerController } from '../../../../dependencies';


const authRouter = Router();


authRouter.post( '/register', (req, res) => registerController.run(req, res) );

export { authRouter };
