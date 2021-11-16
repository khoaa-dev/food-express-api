import express from 'express';

import { getAllFeedBackImage, getFeedbackImageByFeedbackId } from '../../controllers/feedbackImage.js';

const router = express.Router();

router.get('', getAllFeedBackImage);

router.get('/:feedbackId', getFeedbackImageByFeedbackId);

export default router;