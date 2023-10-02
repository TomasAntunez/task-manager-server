import { Router } from 'express';

import {
  filesMiddleware, saveUserProfileImageController, getUserProfileImageController
} from '../../../../dependencies';


const usersRouter = Router();


usersRouter.post( '/profile-image',
  (req, res, next) => filesMiddleware.uploadUserProfileImage(req, res, next),
  (req, res) => saveUserProfileImageController.run(req, res)
);

usersRouter.get( '/profile-image/:fileName',
  (req, res) => getUserProfileImageController.run(req, res)
);


export { usersRouter };
