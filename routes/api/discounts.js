import express from 'express';

import { getAllDiscount, getDiscountByCustomerId, getDiscountByRestaurantId, getDiscountByCode } from '../../controllers/discount.js';

const router = express.Router();

router.get('', getAllDiscount);

router.get('/customer/:customerId', getDiscountByCustomerId);

router.get('/restaurant/:restaurantId', getDiscountByRestaurantId);   

router.get('/code/:code', getDiscountByCode);   


export default router;