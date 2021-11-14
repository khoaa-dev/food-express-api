import express from 'express';

import provinceRoutes from './routes/api/provinces.js';
import restaurantRoutes from './routes/api/restaurants.js';
import foodRoutes from './routes/api/foods.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/province', provinceRoutes);

router.use('/restaurant', restaurantRoutes);

router.use('/food', foodRoutes);

export default router;