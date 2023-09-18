"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserReadingRepository = void 0;
class InMemoryUserReadingRepository {
    constructor(mock) {
        this.mock = mock;
    }
    async findByEmail(email) {
        const user = this.mock.userList.find(user => user.email === email);
        return user ? user : null;
    }
}
exports.InMemoryUserReadingRepository = InMemoryUserReadingRepository;
//# sourceMappingURL=in-memory-user-reading-repository.js.map