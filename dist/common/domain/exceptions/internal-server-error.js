"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = void 0;
const exception_1 = require("./exception");
const http_status_1 = require("./http-status");
class InternalServerErrorException extends exception_1.Exception {
    constructor(code = 'internal-server-error') {
        super({
            code,
            status: http_status_1.HttpStatus.INTERNAL_SERVER_ERROR
        });
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
//# sourceMappingURL=internal-server-error.js.map