import express from 'express';

import { getAllOrder, getOrderByCustomerId } from '../../controllers/order.js';

const router = express.Router();

router.get('', getAllOrder);

router.get('/:customerId', getOrderByCustomerId);

export default router;