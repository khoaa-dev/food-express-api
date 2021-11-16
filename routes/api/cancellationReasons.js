import express from 'express';

import { getAllCancellation } from '../../controllers/cancellationReason.js';

const router = express.Router();

router.get('', getAllCancellation);

export default router;