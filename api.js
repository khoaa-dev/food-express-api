import express from 'express';

import provinceRoutes from './routes/api/provinces.js';
import restaurantRoutes from './routes/api/restaurants.js';
import foodRoutes from './routes/api/foods.js';
import feedbackRoutes from  './routes/api/feedbacks.js';
import feedbackImageRoutes from './routes/api/feedbackImages.js';
import customerRoutes from './routes/api/customers.js';
import favouriteRoutes from './routes/api/favourites.js';
import announcementRoutes from './routes/api/announcements.js';
import orderRoutes from './routes/api/orders.js';
import orderDetailRoutes from './routes/api/orderDetails.js';
import cancellationReasonRoutes from './routes/api/cancellationReasons.js';
import discountRoutes from './routes/api/discounts.js';
import districtRoutes from './routes/api/districts.js';
import villageRoutes from './routes/api/villages.js';

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

router.use('/announcement', announcementRoutes);

router.use('/order', orderRoutes);

router.use('/orderDetail', orderDetailRoutes);

router.use('/cancellation', cancellationReasonRoutes);

router.use('/discount', discountRoutes);

router.use('/district', districtRoutes);

router.use('/village', villageRoutes);

export default router;