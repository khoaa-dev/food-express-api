import express from 'express';

import { getAllFavourite, getFavouriteByCustomerId, createFavourite, deleteFavourite } from '../../controllers/favourite.js';

const router = express.Router();

router.get('', getAllFavourite);

router.get('/:customerId', getFavouriteByCustomerId);

router.post('/createFavourite', createFavourite);

router.post('/deleteFavourite', deleteFavourite);



export default router;