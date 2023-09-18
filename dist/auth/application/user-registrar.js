"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrar = void 0;
const domain_1 = require("../../users/domain");
class UserRegistrar {
    constructor(userReadingRepository, userWritingRepository) {
        this.userReadingRepository = userReadingRepository;
        this.userWritingRepository = userWritingRepository;
    }
    async run(registerUserDto) {
        const user = await this.userReadingRepository.findByEmail(registerUserDto.email);
        if (user)
            throw new domain_1.UniqueEmailException(user.email);
        return await this.userWritingRepository.create({ ...registerUserDto });
    }
}
exports.UserRegistrar = UserRegistrar;
//# sourceMappingURL=user-registrar.js.map