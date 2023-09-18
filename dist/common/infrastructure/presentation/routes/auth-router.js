"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const dependencies_1 = require("../../../../auth/dependencies");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/register', (req, res) => dependencies_1.registerController.run(req, res));
//# sourceMappingURL=auth-router.js.map