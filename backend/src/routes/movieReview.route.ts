import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createMovieReview, deleteMovieReview, getMovieReviews} from "../controllers/movieReview.controller.js";
const router = express.Router();

router.post('/createMovieReview/:movieId', verifyToken, createMovieReview);
router.get('/getMovieReviews/:movieId', getMovieReviews);
router.delete('/deleteMovieReview/:movieId/:movieReviewId', verifyToken, deleteMovieReview);

export default router;
