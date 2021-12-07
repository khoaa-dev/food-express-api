import express from 'express';

import { getAllFood, getFoodByRestaurantId, getFoodByFoodId } from '../../controllers/food.js';

const router = express.Router();

router.get('/', getAllFood);

router.get('/:restaurantId', getFoodByRestaurantId);

router.get('/id/:id', getFoodByFoodId);

export default router;