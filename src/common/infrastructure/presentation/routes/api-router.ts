import { Router } from 'express';

import { authRouter } from './auth-router';
import { usersRouter } from './users-router';


const apiRouter = Router();


apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);


export { apiRouter };
