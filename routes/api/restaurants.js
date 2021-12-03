import express from 'express';

import { getAllResTaurant, getRestaurantByName, getRestaurantById, getRestaurantByMenuId, getRestaurantByPageNumber } from '../../controllers/restaurant.js';

const router = express.Router();

router.get('/', getAllResTaurant);

router.get('/:name', getRestaurantByName);

router.get('/id/:id', getRestaurantById);

router.get('/page/:page', getRestaurantByPageNumber);

router.get('/menuId/:menuId', getRestaurantByMenuId);

export default router;