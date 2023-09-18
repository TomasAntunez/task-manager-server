"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inMemoryUserReadingRepository = exports.inMemoryUserWritingRepository = void 0;
const dependencies_1 = require("../common/dependencies");
const dependencies_2 = require("../auth/dependencies");
const domain_1 = require("./domain");
const infrastructure_1 = require("./infrastructure");
const userFactory = new domain_1.UserFactory(dependencies_1.idServiceAdapter);
console.log({ authFactory: dependencies_2.authFactory });
const usersMock = new infrastructure_1.UsersMock({
    userFactory,
    authFactory: dependencies_2.authFactory,
    usersAmount: 5
});
exports.inMemoryUserWritingRepository = new infrastructure_1.InMemoryUserWritingRepository({
    userFactory,
    authFactory: dependencies_2.authFactory,
    mock: usersMock
});
exports.inMemoryUserReadingRepository = new infrastructure_1.InMemoryUserReadingRepository(usersMock);
//# sourceMappingURL=dependencies.js.map