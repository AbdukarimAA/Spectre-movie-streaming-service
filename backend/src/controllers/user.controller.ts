import express, {Request, Response, NextFunction} from "express";
import User, {IUser} from "../models/user.model.js";
import {createError} from "../utils/handleError.js";

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