import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createActorReview, deleteActorReview, getActorReviews} from "../controllers/actorReview.controller.js";
const router = express.Router();

router.post('/createActorReview/:actorId', verifyToken, createActorReview);
router.get('/getActorReviews/:actorId', getActorReviews);
router.delete('/deleteActorReview/:actorId/:actorReviewId', verifyToken, deleteActorReview);

export default router;
