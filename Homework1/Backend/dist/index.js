"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e = require("express");
const bodyParser = require("body-parser");
const path_1 = require("path");
const helper_1 = require("./helper");
const index_route_1 = require("./route/index.route");
const port = helper_1.normalizePort(process.env.PORT || 3000);
exports.app = e();
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(e.static(path_1.join(__dirname, 'www')));
{
    exports.app.use('/', index_route_1.index);
}
exports.app.use((req, res, next) => {
    var err = new Error('404 - Not Found');
    err['status'] = 404;
    next(err);
});
exports.app.use((error, req, res, next) => {
    res.status(error['status'] || 500);
    res.send({
        message: error.message,
        error
    });
});
exports.app.listen(port, () => {
    console.log(`App started on port: ${port}...`);
});
