import express from 'express';

import { getAllFeedBack, getFeedbackByRestaurantId } from '../../controllers/feedback.js';

const router = express.Router();

router.get('', getAllFeedBack);

router.get('/:restaurantId', getFeedbackByRestaurantId);

export default router;