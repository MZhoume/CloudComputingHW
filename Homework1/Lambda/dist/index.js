"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(event, context, callback) {
    function success(res) {
        callback(null, res);
    }
    function error(code, res) {
        callback(new Error(`${code} ${res}`), null);
    }
    success('Hello World!');
}
exports.handler = handler;
