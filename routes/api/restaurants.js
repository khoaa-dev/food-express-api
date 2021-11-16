import express from 'express';

import { getAllResTaurant, getRestaurantByName, getRestaurantById1 } from '../../controllers/restaurant.js';

const router = express.Router();

router.get('/', getAllResTaurant);

router.get('/:name', getRestaurantByName);

router.get('/:restaurantId', getRestaurantById1);

export default router;