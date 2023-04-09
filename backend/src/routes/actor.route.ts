import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createActor, deleteActor, getActor, getActors, updateActor} from "../controllers/actor.controller.js";
const router = express.Router();

router.post('/createActor', verifyToken, createActor);
router.put('/updateActor/:id', verifyToken, updateActor);
router.delete('/deleteActor/:id', verifyToken, deleteActor);
router.get('/getActor/:id', getActor);
router.get('/getActors', verifyToken, getActors);

export default router;
