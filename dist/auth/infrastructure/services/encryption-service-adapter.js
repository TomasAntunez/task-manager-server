"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptAdapter = void 0;
class BcryptAdapter {
    hashSync(dataToHash) {
        return 'data-hashed';
    }
    compareSync(hashedData, dataToCompare) {
        throw new Error('Method not implemented.');
    }
}
exports.BcryptAdapter = BcryptAdapter;
//# sourceMappingURL=encryption-service-adapter.js.map