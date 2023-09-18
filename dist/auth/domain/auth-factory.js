"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactory = void 0;
const entities_1 = require("./entities");
class AuthFactory {
    constructor(encryptionService, tokenService) {
        this.encryptionService = encryptionService;
        this.tokenService = tokenService;
    }
    create(password) {
        const auth = new entities_1.Auth();
        auth.validationToken = this.tokenService.createValidationToken();
        auth.password = this.encryptionService.hashSync(password);
        return auth;
    }
    createEmpty() {
        return new entities_1.Auth();
    }
}
exports.AuthFactory = AuthFactory;
//# sourceMappingURL=auth-factory.js.map