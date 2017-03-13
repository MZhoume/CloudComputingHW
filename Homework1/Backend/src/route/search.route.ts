import { Router } from 'express';

export const searchRouter: Router = Router();

searchRouter.get('/', (req, res) => {
    res.send('Hello search...');
});
