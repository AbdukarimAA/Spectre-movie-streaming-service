import express from "express";
import {deleteUser, getStats, getUser, getUsers, updateUser} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";
const router = express.Router();

router.put('/update/:id', verifyToken, updateUser)
router.get('/getUsers', verifyToken, getUsers)
router.get('/get/:id', getUser)
router.get('/getStats', getStats)
router.delete('/delete/:id', verifyToken, deleteUser)

export default router;
