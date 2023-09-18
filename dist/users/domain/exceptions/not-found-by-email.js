"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundByEmailException = void 0;
const domain_1 = require("../../../common/domain");
const user_exception_codes_1 = require("./user-exception-codes");
class NotFoundByEmailException extends domain_1.NotFoundException {
    constructor(email) {
        super(user_exception_codes_1.UserExceptionCode.NOT_FOUND_BY_EMAIL, `The user with the email "${email}" was not found`);
    }
}
exports.NotFoundByEmailException = NotFoundByEmailException;
//# sourceMappingURL=not-found-by-email.js.map