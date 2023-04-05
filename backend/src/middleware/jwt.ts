import {Request, Response, NextFunction} from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import {createError} from "../utils/handleError.js";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.cookies.accessToken;
    if(!token) return next(createError(401, "You are not authenticated"));

    jwt.verify(token, process.env.JWT_KEY as string, async (err: any, payload: any) => {
        if(err) return next(createError(403, "Token is not valid"));
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin;
        next();
    })
};