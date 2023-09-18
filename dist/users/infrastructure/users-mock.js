"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMock = void 0;
class UsersMock {
    constructor({ authFactory, userFactory, usersAmount }) {
        this.userList = [];
        this.userFactory = userFactory;
        this.authFactory = authFactory;
        this.createManyUsers(usersAmount);
    }
    createUser(number) {
        console.log({ number });
        return this.userFactory.create({
            email: `test${number}@email.com`,
            username: `test${number}`,
            auth: this.authFactory.create('123456')
        });
    }
    createManyUsers(amount) {
        for (let i = 1; i <= amount; i++) {
            this.userList.push(this.createUser(i));
        }
    }
}
exports.UsersMock = UsersMock;
//# sourceMappingURL=users-mock.js.map