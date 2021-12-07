import express from 'express';

import { getAllFavourite, getFavouriteByCustomerId, createFavourite } from '../../controllers/favourite.js';

const router = express.Router();

router.get('', getAllFavourite);

router.get('/:customerId', getFavouriteByCustomerId);

router.post('/createFavourite', createFavourite);

export default router;