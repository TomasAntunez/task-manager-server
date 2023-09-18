"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const infrastructure_1 = require("./common/infrastructure");
(() => {
    try {
        new infrastructure_1.ExpressServer(3000).run();
    }
    catch (error) {
        console.log(error);
        (0, node_process_1.exit)(1);
    }
})();
//# sourceMappingURL=main.js.map