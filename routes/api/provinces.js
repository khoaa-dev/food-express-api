import express from 'express';
import {createProvince, getProvince, getProvinceById, getProvinceByPageNumber} from '../../controllers/province.js';

const router = express.Router();

router.get('/', getProvince);

router.get('/:id', getProvinceById);

router.post('/createProvince', createProvince);

router.get('/page/:page', getProvinceByPageNumber);

export default router;