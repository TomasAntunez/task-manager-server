import { Router } from 'express';

import { filesMiddleware, userProfileImageSaveController } from '../../../../dependencies';


const usersRouter = Router();


usersRouter.post( '/profile-image',
  (req, res, next) => filesMiddleware.uploadUserProfileImage(req, res, next),
  (req, res) => userProfileImageSaveController.run(req, res)
);


export { usersRouter };
