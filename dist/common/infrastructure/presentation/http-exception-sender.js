"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionSender = void 0;
const domain_1 = require("../../domain");
class HttpExceptionSender {
    static run(res, error) {
        if (error instanceof domain_1.Exception) {
            return res.status(error.status).json({
                code: error.code,
                detail: error.detail
            });
        }
        console.log(error);
        const internalServerError = new domain_1.InternalServerErrorException();
        return res.status(internalServerError.status).json({
            code: internalServerError.code
        });
    }
}
exports.HttpExceptionSender = HttpExceptionSender;
//# sourceMappingURL=http-exception-sender.js.map