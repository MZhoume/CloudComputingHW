import { Router } from 'express';

export const index = Router();

index.get('/', (req, res) => {
    res.send('Hello index');
});

index.get('/hello', (req, res) => {
    res.send('hello hello');
});