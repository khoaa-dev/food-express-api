import express from 'express';

import { getAllResTaurant, getRestaurantByName, getRestaurantById, getRestaurantByMenuId, getRestaurantByPageNumber, searchRestaurantByName } from '../../controllers/restaurant.js';

const router = express.Router();

router.get('/', getAllResTaurant);

router.get('/:name', getRestaurantByName);

router.get('/id/:id', getRestaurantById);

router.get('/page/:page', getRestaurantByPageNumber);

router.get('/menuId/:menuId', getRestaurantByMenuId);

router.get('/search/:name', searchRestaurantByName);

export default router;