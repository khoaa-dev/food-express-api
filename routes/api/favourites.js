import express from 'express';

import { getAllFavourite, getFavouriteByCustomerId } from '../../controllers/favourite.js';

const router = express.Router();

router.get('', getAllFavourite);

router.get('/:customerId', getFavouriteByCustomerId);

export default router;