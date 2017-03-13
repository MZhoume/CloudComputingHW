"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e = require("express");
const bodyParser = require("body-parser");
const path_1 = require("path");
const helper_1 = require("./helper");
const stream_1 = require("./twitter/stream");
const config_1 = require("./config");
const index_route_1 = require("./route/index.route");
const search_route_1 = require("./route/search.route");
const port = helper_1.normalizePort(process.env.PORT || 8081);
const app = e();
// static settings
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(e.static(path_1.join(__dirname, 'www')));
    app.use((req, res, next) => {
        console.log(req.path);
        next();
    });
}
// routes settings
{
    app.use('/', index_route_1.indexRoute);
    app.use('/search', search_route_1.searchRouter);
}
// error handling
{
    app.use((req, res, next) => {
        var err = new Error('404 - Not Found');
        err['status'] = 404;
        next(err);
    });
    app.use((error, req, res, next) => {
        res.status(error['status'] || 500);
        res.send({
            message: error.message,
            error
        });
    });
}
app.listen(port, () => {
    console.log(`App started on port: ${port}...`);
});
new stream_1.TwitterStreamRetriever(config_1.twitConfig).bootstrap();
//# sourceMappingURL=index.js.map