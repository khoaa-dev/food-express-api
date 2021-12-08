import express from 'express';

import { getAllFeedBack, getFeedbackByRestaurantId, createFeedback } from '../../controllers/feedback.js';

const router = express.Router();

router.get('', getAllFeedBack);

router.get('/:restaurantId', getFeedbackByRestaurantId);

router.get('/createFeedback', createFeedback);

export default router;
