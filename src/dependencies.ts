import { IdServiceAdapter } from "./common/infrastructure/id-service-adapter";

import { UserRegistrar } from "./auth/application";
import { AuthFactory } from "./auth/domain";
import { BcryptAdapter, RegisterController, TokenServiceAdapter } from "./auth/infrastructure";

import { UserFactory } from "./users/domain";
import {
  InMemoryUserReadingRepository, InMemoryUserWritingRepository, UsersMock
} from "./users/infrastructure";


// SERVICES
const idServiceAdapter = new IdServiceAdapter();
const encryptionService = new BcryptAdapter();
const tokenService = new TokenServiceAdapter();


// FACTORIES
const authFactory = new AuthFactory(encryptionService, tokenService);
const userFactory = new UserFactory(idServiceAdapter);


// REPOSITORIES
const usersMock = new UsersMock({
  userFactory,
  authFactory,
  usersAmount: 5
});

const inMemoryUserWritingRepository = new InMemoryUserWritingRepository({
  userFactory,
  authFactory,
  mock: usersMock
});
const inMemoryUserReadingRepository = new InMemoryUserReadingRepository(usersMock);


// USE CASES
const userRegistrar = new UserRegistrar(
  inMemoryUserReadingRepository,
  inMemoryUserWritingRepository
);


// PRESENTATION
export const registerController = new RegisterController(userRegistrar);
