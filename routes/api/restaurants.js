import express from 'express';

import { getAllResTaurant, getRestaurantByName, getRestaurantById1, getRestaurantByPageNumber } from '../../controllers/restaurant.js';

const router = express.Router();

router.get('/', getAllResTaurant);

router.get('/:name', getRestaurantByName);

router.get('/:restaurantId', getRestaurantById1);

router.get('/page/:page', getRestaurantByPageNumber);

export default router;