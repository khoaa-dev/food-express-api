import express from 'express';
import {getProvince, getProvinceById} from '../../controllers/province.js';

const router = express.Router();

router.get('/', getProvince);

router.get('/:id', getProvinceById);

export default router;