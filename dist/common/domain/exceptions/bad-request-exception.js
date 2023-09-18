"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const exception_1 = require("./exception");
const http_status_1 = require("./http-status");
class BadRequestException extends exception_1.Exception {
    constructor(code = 'bad-request', detail) {
        super({
            code,
            detail,
            status: http_status_1.HttpStatus.BAD_REQUEST,
        });
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=bad-request-exception.js.map