import { Router } from 'express';

export const indexRoute: Router = Router();

indexRoute.get('/', (req, res) => {
    res.send('Hello!');
});
