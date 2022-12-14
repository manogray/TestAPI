import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({
        version: 1.0
    });
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/sessions', SessionController.store);

export default routes;
