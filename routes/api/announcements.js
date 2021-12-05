import express from 'express';

import { getAllAnnouncement, createAnnouncement } from '../../controllers/announcement.js';

const router = express.Router();

router.get('', getAllAnnouncement);

router.post('/createAnnouncement', createAnnouncement);

export default router;