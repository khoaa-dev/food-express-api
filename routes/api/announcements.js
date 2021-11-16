import express from 'express';

import { getAllAnnouncement, getAnnouncementByCustomerId } from '../../controllers/announcement.js';

const router = express.Router();

router.get('', getAllAnnouncement);

router.get('/:customerId', getAnnouncementByCustomerId);

export default router;