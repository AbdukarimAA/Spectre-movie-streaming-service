import {NextFunction, Request, Response} from "express";
import Movie, {IMovie} from "../models/movie.model.js";
import {createError} from "../utils/handleError.js";
import {Aggregate} from "mongoose";

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to create a movie'));
    const newMovie = new Movie({
        ...req.body
    });

    try {
        const savedMovie = await newMovie.save();
        res.status(201).send(savedMovie);
    } catch (error: any) {
        next(error);
    }
};

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to create a movie'));
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).send(updatedMovie);
    } catch (error: any) {
        next(error);
    }
};

export const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete a movie'));
    try {
       await Movie.findByIdAndDelete(req.params.id);
       res.status(200).send('The movie has been deleted successfully');
    } catch (error: any) {
        next(error);
    }
};

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to get all movies'));
    try {
        const movies = await Movie.find().sort({_id: -1});
        res.status(200).send(movies);
    } catch (error: any) {
        next(error);
    }
};

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};

export const getRandomMovie = async (req: Request, res: Response, next: NextFunction) => {
    const type = req.query.type;
    let movie: any;
    try {
        if(type === 'cartoons') {
            movie = await Movie.aggregate([
                {
                    $match: {
                        isCartoon: true
                    },
                },
                {
                    $sample: {
                        size: 3
                    },
                }
            ])
        } else {
            movie = await Movie.aggregate([
                {
                    $match: {
                        isCartoon: false
                    },
                },
                {
                    $sample: {
                        size: 3
                    },
                }
            ])
        }
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};