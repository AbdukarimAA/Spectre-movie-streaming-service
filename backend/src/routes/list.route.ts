import express from "express";
import {createList, deleteList, getList} from "../controllers/list.controller.js";
import {verifyToken} from "../middleware/jwt.js";
const router = express.Router();

router.post('/createList', verifyToken, createList);
router.delete('/deleteList/:id', verifyToken, deleteList);
router.get('/getList', verifyToken, getList);

export default router;