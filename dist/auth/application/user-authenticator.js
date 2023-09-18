"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthenticator = void 0;
class UserAuthenticator {
    constructor({ userReadingRepository, encryptionService }) {
        this.userReadingRepository = userReadingRepository;
        this.encryptionService = encryptionService;
    }
}
exports.UserAuthenticator = UserAuthenticator;
//# sourceMappingURL=user-authenticator.js.map