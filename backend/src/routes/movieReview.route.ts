import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createMovieReview, deleteMovieReview, getMovieReviews} from "../controllers/movieReview.controller.js";
const router = express.Router();

router.post('/createMovieReview', verifyToken, createMovieReview);
router.get('/getMovieReviews/:movieId', verifyToken, getMovieReviews);
router.delete('/deleteMovieReview/:id', verifyToken, deleteMovieReview);

export default router;
