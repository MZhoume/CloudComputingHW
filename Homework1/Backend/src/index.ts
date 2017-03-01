import * as e from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import { normalizePort } from './helper';

import { index } from './route/index.route';

const port = normalizePort(process.env.PORT || 3000);

export const app: e.Application = e();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(e.static(join(__dirname, 'www')));

{
    app.use('/', index);
}

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

app.listen(port, () => {
    console.log(`App started on port: ${port}...`);
});