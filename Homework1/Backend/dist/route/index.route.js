"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.indexRoute = express_1.Router();
exports.indexRoute.get('/', (req, res) => {
    res.send('Hello index');
});
exports.indexRoute.get('/hello', (req, res) => {
    res.send('hello hello');
});
//# sourceMappingURL=index.route.js.map