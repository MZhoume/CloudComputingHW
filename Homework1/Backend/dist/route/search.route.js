"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.searchRouter = express_1.Router();
exports.searchRouter.get('/', (req, res) => {
    res.send('Hello search...');
});
//# sourceMappingURL=search.route.js.map