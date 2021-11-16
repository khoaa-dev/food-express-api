import express from 'express';

import { getAllDistrict, getDistrictById } from '../../controllers/district.js';

const router = express.Router();

router.get('', getAllDistrict);

router.get('/:id', getDistrictById);   


export default router;