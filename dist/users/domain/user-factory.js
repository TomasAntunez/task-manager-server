"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const entities_1 = require("./entities");
class UserFactory {
    constructor(idService) {
        this.idService = idService;
    }
    createEmpty(auth) {
        return new entities_1.User(auth);
    }
    create({ username, email, auth }) {
        const user = new entities_1.User(auth);
        user.id = this.idService.createUUID();
        user.username = username;
        user.email = email;
        return user;
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user-factory.js.map