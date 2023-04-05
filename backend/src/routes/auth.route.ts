import express from "express";
import {login, register, logout} from "../controllers/auth.controller.js";
const router = express.Router();
import {authValidation} from '../utils/authValidation.js'


router.post('/register', authValidation, register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
