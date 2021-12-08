import express from 'express';

import { getAllFeedBackImage, getFeedbackImageByFeedbackId, createFeedbackImage } from '../../controllers/feedbackImage.js';

const router = express.Router();

router.get('', getAllFeedBackImage);

router.get('/:feedbackId', getFeedbackImageByFeedbackId);

router.post('/createFeedbackImage', createFeedbackImage);

export default router;