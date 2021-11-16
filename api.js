import express from 'express';

import provinceRoutes from './routes/api/provinces.js';
import restaurantRoutes from './routes/api/restaurants.js';
import foodRoutes from './routes/api/foods.js';
import feedbackRoutes from  './routes/api/feedbacks.js';
import feedbackImageRoutes from './routes/api/feedbackImages.js';
import customerRoutes from './routes/api/customers.js';
import favouriteRoutes from './routes/api/favourites.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/province', provinceRoutes);

router.use('/restaurant', restaurantRoutes);

router.use('/food', foodRoutes);

router.use('/feedback', feedbackRoutes);

router.use('/feedbackImage', feedbackImageRoutes);

router.use('/customer', customerRoutes);

router.use('/favourite', favouriteRoutes);

export default router;