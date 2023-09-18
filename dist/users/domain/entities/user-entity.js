"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const domain_1 = require("../../../common/domain");
class User extends domain_1.BaseEntity {
    constructor(auth) {
        super();
        this.email = '';
        this.username = '';
        this.auth = auth;
    }
}
exports.User = User;
//# sourceMappingURL=user-entity.js.map