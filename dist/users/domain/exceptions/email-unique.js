"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEmailException = void 0;
const domain_1 = require("../../../common/domain");
const user_exception_codes_1 = require("./user-exception-codes");
class UniqueEmailException extends domain_1.BadRequestException {
    constructor(email) {
        super(user_exception_codes_1.UserExceptionCode.EMAIL_UNIQUE, `There cannot be two users with the same email, the email ${email} already exists`);
    }
}
exports.UniqueEmailException = UniqueEmailException;
//# sourceMappingURL=email-unique.js.map