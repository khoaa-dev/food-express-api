import express from 'express';

import { createCustomer, updateCustomer, getAllCustomer, getCustomerById } from '../../controllers/customer.js';

const router = express.Router();

router.get('', getAllCustomer);

router.get('/:id', getCustomerById);

router.post('/createCustomer', createCustomer);

router.post('/updateCustomer/:id', updateCustomer);

export default router;