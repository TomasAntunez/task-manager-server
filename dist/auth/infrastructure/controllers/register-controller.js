"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const domain_1 = require("../../../common/domain");
const infrastructure_1 = require("../../../common/infrastructure");
class RegisterController {
    constructor(userRegistrar) {
        this.userRegistrar = userRegistrar;
    }
    async run(req, res) {
        try {
            const result = await this.userRegistrar.run(req.body);
            res.status(domain_1.HttpStatus.CREATED).json(result);
        }
        catch (error) {
            infrastructure_1.HttpExceptionSender.run(res, error);
        }
    }
}
exports.RegisterController = RegisterController;
//# sourceMappingURL=register-controller.js.map