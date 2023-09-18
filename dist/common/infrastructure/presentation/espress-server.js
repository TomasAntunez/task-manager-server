"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const express_1 = __importDefault(require("express"));
const api_router_1 = require("./api-router");
class ExpressServer {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.setMiddlewares();
        this.app.use('/api', api_router_1.apiRouter);
    }
    setMiddlewares() {
        this.app.use(express_1.default.json());
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=espress-server.js.map