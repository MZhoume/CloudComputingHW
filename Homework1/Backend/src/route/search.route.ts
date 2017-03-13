import { Router } from 'express';

export const searchRouter: Router = Router();

searchRouter.get('/', (req, res) => {
    let key = req.param('key');
    if (key) {

    } else {
        res.send('Please specify the key.');
    }
});
