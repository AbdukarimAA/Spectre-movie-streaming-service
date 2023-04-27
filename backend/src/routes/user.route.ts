import express from "express";
import {
    deleteUser,
    getLikedUserMovies,
    getStats,
    getUser,
    getUsers,
    updateUser,
    addLikedUserMovies,
    deleteLikedUserMovies, deleteOneLikedUserMovies
} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";
const router = express.Router();

router.put('/update/:id', verifyToken, updateUser)
router.get('/getUsers', verifyToken, getUsers)
router.get('/getUser/:id', verifyToken, getUser)
router.get('/getStats', verifyToken, getStats)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/createFavorite/:id', verifyToken, addLikedUserMovies)
router.get('/getFavorite/:id', verifyToken, getLikedUserMovies)
router.delete('/deleteFavorite/:id', verifyToken, deleteLikedUserMovies)
router.delete('/deleteFavorite/:id/:movieId', verifyToken, deleteOneLikedUserMovies)

export default router;
