import express from 'express';

import { getAllAnnouncement, createAnnouncement, deleteAnnouncement } from '../../controllers/announcement.js';

const router = express.Router();

router.get('', getAllAnnouncement);

router.post('/createAnnouncement', createAnnouncement);

router.delete('/deleteAnnouncement/:id', deleteAnnouncement);

export default router;