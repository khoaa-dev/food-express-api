import express from 'express';

import { getAllOrderDetail, getOrderDetailByOrderId } from '../../controllers/orderDetail.js';

const router = express.Router();

router.get('', getAllOrderDetail);

router.get('/:orderId', getOrderDetailByOrderId);

export default router;