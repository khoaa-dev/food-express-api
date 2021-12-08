import express from 'express';

import { getAllOrderDetail, getOrderDetailByOrderId, createOrderDetail } from '../../controllers/orderDetail.js';

const router = express.Router();

router.get('', getAllOrderDetail);

router.get('/:orderId', getOrderDetailByOrderId);

router.post('/createOrderDetail', createOrderDetail);

export default router;