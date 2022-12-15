import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import ProductController from '../app/controllers/ProductController';
import OrderController from '../app/controllers/OrderController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({
        version: 1.0
    });
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:product_id', ProductController.show);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.get('/orders/:order_id', OrderController.show);
routes.put('/checkout/:order_id', OrderController.checkout);

export default routes;
