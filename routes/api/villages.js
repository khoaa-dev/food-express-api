import express from 'express';
import {getAllVillage, getVillageById} from '../../controllers/village.js';

const router = express.Router();

router.get('/', getAllVillage);

router.get('/:id', getVillageById);

export default router;