import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovie, getMovieByGenre,
    getRandomMovie, getTopRatedMovie,
    updateMovie
} from "../controllers/movie.controller.js";
const router = express.Router();

router.post('/createMovie', verifyToken, createMovie);
router.put('/updateMovie/:id', verifyToken, updateMovie);
router.delete('/deleteMovie/:id', verifyToken, deleteMovie);
router.get('/getMovie/:id', getMovie);
router.get('/getAllMovies', getAllMovies);
router.get('/getRandomMovie', getRandomMovie);
router.get('/getMoviesTopRated', getTopRatedMovie);
router.get('/getMoviesByGenre', getMovieByGenre);
export default router;
