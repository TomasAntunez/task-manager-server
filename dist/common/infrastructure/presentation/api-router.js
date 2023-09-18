"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const routes_1 = require("./routes");
const apiRouter = (0, express_1.Router)();
exports.apiRouter = apiRouter;
apiRouter.use('/auth', routes_1.authRouter);
//# sourceMappingURL=api-router.js.map