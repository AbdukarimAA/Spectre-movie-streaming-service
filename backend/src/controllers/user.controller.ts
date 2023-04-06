import express, {Request, Response, NextFunction} from "express";
import User, {IUser} from "../models/user.model.js";
import {createError} from "../utils/handleError.js";
import bcrypt from "bcrypt";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.userId === req.params.id || req.isAdmin) {
        if(req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 8);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});

            res.status(200).send(updatedUser);
        } catch (error: any) {
            next(error);
        }
    } else {
        return next(createError(403, 'You can update your account only'));
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query.new;
    if(req.isAdmin) {
        try {
            const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
            res.status(200).send(users);
        } catch (error: any) {
            next(error);
        }
    } else {
        return next(createError(403, 'You are not allowed to see all users'));
    }
}

export const getStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const today = new Date();
        const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const lastYear = today.setFullYear(today.setFullYear(0) - 1);

        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);

        res.status(200).send(data);
    } catch (error: any) {
        next(error);
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        const {password, ...info} = user!._doc;
        res.status(200).send(info);
    } catch (error: any) {
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);

        if(req.userId !== user!._id.toString()) {
            return next(createError(403, "You can delete your account only"));
        }
        await User.findByIdAndDelete(req.params.id);

        res.status(200).send('User deleted successfully');
    } catch (error: any) {
        next(error);
    }
}