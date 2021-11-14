import express from 'express';

import { getAllFood, getFoodByRestaurantId } from '../../controllers/food.js';

const router = express.Router();

router.get('/', getAllFood);

router.get('/:restaurantId', getFoodByRestaurantId);

export default router;