import { IdServiceAdapter } from "./common/infrastructure/id-service-adapter";

import { UserRegistrar } from "./auth/application";
import { BcryptAdapter, RegisterController, TokenServiceAdapter } from "./auth/infrastructure";

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


// PRESENTATION
export const registerController = new RegisterController(userRegistrar);
