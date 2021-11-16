import express from 'express';

import { getAllCustomer, getCustomerById } from '../../controllers/customer.js';

const router = express.Router();

router.get('', getAllCustomer);

router.get('/:id', getCustomerById);

export default router;