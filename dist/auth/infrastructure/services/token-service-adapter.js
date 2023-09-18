"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenServiceAdapter = void 0;
class TokenServiceAdapter {
    createValidationToken() {
        return 'new-validation-token';
    }
    createAccessToken(payload) {
        throw new Error('Method not implemented.');
    }
    createRefreshToken(payload) {
        throw new Error('Method not implemented.');
    }
}
exports.TokenServiceAdapter = TokenServiceAdapter;
//# sourceMappingURL=token-service-adapter.js.map