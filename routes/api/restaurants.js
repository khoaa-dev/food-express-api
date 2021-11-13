import express from 'express';

import { getAllResTaurant, getRestaurantByName } from '../../controllers/restaurant.js';

const router = express.Router();

router.get('/', getAllResTaurant);

router.get('/:name', getRestaurantByName);

export default router;