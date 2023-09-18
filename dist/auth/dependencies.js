"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = exports.authFactory = void 0;
const dependencies_1 = require("../users/dependencies");
const application_1 = require("./application");
const domain_1 = require("./domain");
const infrastructure_1 = require("./infrastructure");
const encryptionService = new infrastructure_1.BcryptAdapter();
const tokenService = new infrastructure_1.TokenServiceAdapter();
exports.authFactory = new domain_1.AuthFactory(encryptionService, tokenService);
console.log({ fromAuthFactory: exports.authFactory });
const userRegistrar = new application_1.UserRegistrar(dependencies_1.inMemoryUserReadingRepository, dependencies_1.inMemoryUserWritingRepository);
exports.registerController = new infrastructure_1.RegisterController(userRegistrar);
//# sourceMappingURL=dependencies.js.map