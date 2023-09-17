import { Router } from 'express';

import { registerController } from '@/auth/dependencies';


const authRouter = Router();


authRouter.post( '/register', (req, res) => registerController.run(req, res) );

export { authRouter };
