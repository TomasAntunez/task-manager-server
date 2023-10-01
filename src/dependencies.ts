import { IdServiceAdapter } from "./common/infrastructure/id-service-adapter";

import { UserProfileImageSaver } from './files/application';
import {
  MulterHandler, FilesMiddleware, UserProfileImageSaveController, AWSS3Adapter
} from './files/infrastructure';

import { UserRegistrar, EmailValidator } from "./auth/application";
import {
  BcryptAdapter, TokenServiceAdapter, RegisterController, ValidateEmailController
} from "./auth/infrastructure";

import { UsersMock, InMemoryUserRepository } from "./users/infrastructure";


// SERVICES
const idService = new IdServiceAdapter();
const encryptionService = new BcryptAdapter();
const tokenService = new TokenServiceAdapter();

const awsS3Adapter = new AWSS3Adapter();


// REPOSITORIES
const usersMock = new UsersMock({ idService, encryptionService, tokenService });

const inMemoryUserRepository = new InMemoryUserRepository(usersMock);


// USE CASES
const userProfileImageSaver = new UserProfileImageSaver(awsS3Adapter, idService);

const userRegistrar = new UserRegistrar({
  userRepository: inMemoryUserRepository,
  idService,
  encryptionService,
  tokenService
});
const emailValidator = new EmailValidator(inMemoryUserRepository);


// PRESENTATION
const multerHandler = new MulterHandler();
export const filesMiddleware = new FilesMiddleware(multerHandler);

export const userProfileImageSaveController = new UserProfileImageSaveController(
  userProfileImageSaver
);

export const registerController = new RegisterController(userRegistrar);
export const validateEmailController = new ValidateEmailController(emailValidator);
