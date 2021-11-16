import express from 'express';

import { getAllDiscount, getDiscountByCustomerId, getDiscountByRestaurantId } from '../../controllers/discount.js';

const router = express.Router();

router.get('', getAllDiscount);

router.get('/customer/:customerId', getDiscountByCustomerId);

router.get('/restaurant/:restaurantId', getDiscountByRestaurantId);    


export default router;