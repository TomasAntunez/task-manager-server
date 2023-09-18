"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const exception_1 = require("./exception");
const http_status_1 = require("./http-status");
class NotFoundException extends exception_1.Exception {
    constructor(code = 'not-found', detail) {
        super({
            code,
            detail,
            status: http_status_1.HttpStatus.NOT_FOUND,
        });
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found-exception.js.map