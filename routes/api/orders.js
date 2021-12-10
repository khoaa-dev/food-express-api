import express from 'express';

import { getAllOrder, getOrderByCustomerId, createOrder, updateOrder } from '../../controllers/order.js';

const router = express.Router();

router.get('/', getAllOrder);

router.get('/:customerId', getOrderByCustomerId);

router.post('/createOrder', createOrder);

router.post('/updateOrder', updateOrder);

export default router;