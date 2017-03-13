"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.searchRouter = express_1.Router();
exports.searchRouter.get('/', (req, res) => {
    let key = req.param('key');
    if (key) {
    }
    else {
        res.send('Please specify the key.');
    }
});
//# sourceMappingURL=search.route.js.map