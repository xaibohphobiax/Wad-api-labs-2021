import express from 'express';
//import peopleModel from './peopleModel';
import asyncHandler from 'express-async-handler';
import {getPeople} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const popularMovies = await getPeople();
    res.status(200).json(popularMovies);
}));

export default router;