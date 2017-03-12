import * as e from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import { normalizePort } from './helper';
import { TwitterStreamRetriever } from './twitter/stream';
import { twitConfig } from './config';

import { indexRoute } from './route/index.route';
import { searchRouter } from './route/search.route';

const port = normalizePort(process.env.PORT || 3000);

export const app: e.Application = e();

// static settings
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(e.static(join(__dirname, 'www')));
}

// routes settings
{
    app.use('/', indexRoute);
    app.use('/search', searchRouter);
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

// new TwitterStreamRetriever(twitConfig).bootstrap();