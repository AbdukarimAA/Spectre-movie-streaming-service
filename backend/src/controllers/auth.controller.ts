import express, {Request, Response, NextFunction} from "express";
import User, {IUser} from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {createError} from "../utils/handleError.js";
import {validationResult} from 'express-validator';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const hash = bcrypt.hashSync(req.body.password, 8);
        const newUser: IUser = new User({
           ...req.body,
            password: hash
        });

        await newUser.save();
        res.status(201).send('User has been created successfully')

    } catch (error: any) {
        next(error);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({email: req.body.email});
        if(!user) return next(createError(404, "User not found"));


        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return next(createError(404, "Wrong password or username"));

        const {password, ...info} = user._doc;
        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_KEY as string, {expiresIn: "24d"});

        res.cookie('accessToken', token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }).status(200).send(info);

    } catch (error: any) {
        next(error);
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('accessToken', {
            sameSite: "none",
            secure: true
        }).status(200).send('User logged out');

    } catch (error: any) {
        res.status(500).send('Something went wrong');
    }
}