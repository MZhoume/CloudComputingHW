"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
exports.normalizePort = normalizePort;
//# sourceMappingURL=helper.js.map