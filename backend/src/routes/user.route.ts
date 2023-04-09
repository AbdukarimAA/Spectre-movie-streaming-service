import express from "express";
import {
    deleteUser,
    getLikedUserMovies,
    getStats,
    getUser,
    getUsers,
    updateUser,
    addLikedUserMovies,
    deleteLikedUserMovies
} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";
const router = express.Router();

router.put('/update/:id', verifyToken, updateUser)
router.get('/getUsers', verifyToken, getUsers)
router.get('/get/:id', verifyToken, getUser)
router.get('/getStats', verifyToken, getStats)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/createFavorite', verifyToken, addLikedUserMovies)
router.get('/getFavorite', verifyToken, getLikedUserMovies)
router.delete('/deleteFavorite', verifyToken, deleteLikedUserMovies)

export default router;
