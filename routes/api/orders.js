import express from 'express';

import { getAllOrder, getOrderByCustomerId, createOrder } from '../../controllers/order.js';

const router = express.Router();

router.get('/', getAllOrder);

router.get('/:customerId', getOrderByCustomerId);

router.post('/createOrder', createOrder);

export default router;