import {NextFunction, Request, Response} from "express";
import {createError} from "../utils/handleError.js";
import List from "../models/list.model.js";

export const createList = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to create a list'));
    const newList = new List({
        ...req.body
    });

    try {
        const savedList = await newList.save();
        res.status(201).send(savedList);
    } catch (error: any) {
        next(error);
    }
};

export const deleteList = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete a list'));

    try {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).send('The list has been deleted');
    } catch (error: any) {
        next(error);
    }
};

export const getList = async (req: Request, res: Response, next: NextFunction) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let list: any = [];

    try {
        if(typeQuery) {
            if(genreQuery) {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}}
                ])
            } else {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ])
            }
        } else {
            list = await List.aggregate([{$sample: {size: 10}}])
        }

        res.status(201).send(list);
    } catch (error: any) {
        next(error);
    }
};
