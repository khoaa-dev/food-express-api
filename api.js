import express from 'express';

import provinceRoutes from './routes/api/provinces.js';
import restaurantRoutes from './routes/api/restaurants.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/province', provinceRoutes);

router.use('/restaurant', restaurantRoutes);

export default router;