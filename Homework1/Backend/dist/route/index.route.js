"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.index = express_1.Router();
exports.index.get('/', (req, res) => {
    res.send('Hello index');
});
exports.index.get('/hello', (req, res) => {
    res.send('hello hello');
});
