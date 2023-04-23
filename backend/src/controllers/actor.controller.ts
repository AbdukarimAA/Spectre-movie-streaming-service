import {NextFunction, Request, Response} from "express";
import {createError} from "../utils/handleError.js";
import Actor from "../models/actor.model.js";

export const createActor = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to create an actor'));
    const newActor = new Actor({
        ...req.body
    });

    try {
        const savedActor = await newActor.save();
        res.status(201).send(savedActor);
    } catch (error: any) {
        next(error);
    }
};

export const updateActor = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to update an actor'));
    try {
        const updatedActor = await Actor.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).send(updatedActor);
    } catch (error: any) {
        next(error);
    }
};

export const deleteActor = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete an actor'));
    try {
        await Actor.findByIdAndDelete(req.params.id)
        res.status(201).send("Actor successfully deleted");
    } catch (error: any) {
        next(error);
    }
};

export const getActor = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete an actor'));
    try {
        // const newActor = await Actor.findByIdAndUpdate(req.params.id);
        const actor = await Actor.findById(req.params.id)
        res.status(200).send(actor);
    } catch (error: any) {
        next(error);
    }
};

export const getActors = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete an actor'));
    try {
        const {search} = req.query;
        let query = {
            ...(search && {nameEng: {$regex: search, $options: 'i'}}),
            // ...(search && {nameRus: {$regex: search, $options: 'i'}})
        };

        const queryActors = await Actor.find(query).sort({createdAt: -1});
        const actors = await Actor.find().sort({_id: -1})
        res.status(200).send(queryActors);
    } catch (error: any) {
        next(error);
    }
};