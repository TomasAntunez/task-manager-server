"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserWritingRepository = void 0;
class InMemoryUserWritingRepository {
    constructor({ mock, authFactory, userFactory }) {
        this.mock = mock;
        this.authFactory = authFactory;
        this.userFactory = userFactory;
    }
    async create(createUserParams) {
        throw new Error('Method not implemented.');
    }
    async update(updateUserParams) {
        throw new Error('Method not implemented.');
    }
}
exports.InMemoryUserWritingRepository = InMemoryUserWritingRepository;
//# sourceMappingURL=in-memory-user-writing-repository.js.map