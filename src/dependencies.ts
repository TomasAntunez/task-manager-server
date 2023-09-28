import { IdServiceAdapter } from "./common/infrastructure/id-service-adapter";

import { UserRegistrar, EmailValidator } from "./auth/application";
import {
  BcryptAdapter, TokenServiceAdapter, RegisterController, ValidateEmailController
} from "./auth/infrastructure";

import { UsersMock, InMemoryUserRepository } from "./users/infrastructure";


// SERVICES
const idService = new IdServiceAdapter();
const encryptionService = new BcryptAdapter();
const tokenService = new TokenServiceAdapter();


// REPOSITORIES
const usersMock = new UsersMock({ idService, encryptionService, tokenService });

const inMemoryUserRepository = new InMemoryUserRepository(usersMock);


// USE CASES
const userRegistrar = new UserRegistrar({
  userRepository: inMemoryUserRepository,
  idService,
  encryptionService,
  tokenService
});
const emailValidator = new EmailValidator(inMemoryUserRepository);


// PRESENTATION
export const registerController = new RegisterController(userRegistrar);
export const validateEmailController = new ValidateEmailController(emailValidator);
