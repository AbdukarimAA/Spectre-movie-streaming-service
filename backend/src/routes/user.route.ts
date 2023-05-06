import express from "express";
import {
    deleteUser,
    getLikedUserMovies,
    getStats,
    getUser,
    getUsers,
    updateUser,
    addLikedUserMovies,
    deleteLikedUserMovies, deleteOneLikedUserMovies, saveWatchTime, startMovie, resumeMovie, sendMailFeedBack
} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";
const router = express.Router();

router.put('/update/:id', verifyToken, updateUser)
router.get('/getUsers', verifyToken, getUsers)
router.get('/getUser/:id', verifyToken, getUser)
router.get('/getStats', verifyToken, getStats)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/createFavorite/:id', verifyToken, addLikedUserMovies)
router.post('/saveWatchTime/:id', verifyToken, saveWatchTime)
router.post('/sendEmail', verifyToken, sendMailFeedBack)
router.get('/getFavorite/:id', verifyToken, getLikedUserMovies)
router.delete('/deleteFavorite/:id', verifyToken, deleteLikedUserMovies)
router.delete('/deleteFavorite/:id/:movieId', verifyToken, deleteOneLikedUserMovies)
router.put('/startMovie/:id', verifyToken, startMovie)
router.put('/resumeMovie/:id', verifyToken, resumeMovie)

export default router;
