import {NextFunction, Request, Response} from "express";
import MovieReview, {IMovieReview} from "../models/movieReview.model.js";
import {createError} from "../utils/handleError.js";
import Movie from "../models/movie.model.js";

export const createMovieReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.isAdmin) return next(createError(403, 'Admins can\'t create a review'));

        const newMovieReview = new MovieReview({
            movieId: req.body.movieId,
            userId: req.userId,
            title: req.body.title,
            desc: req.body.desc,
            stars: req.body.stars
        });

        const movieReview = await MovieReview.findOne({
            movieId: req.body.movieId,
            userId: req.userId
        });
        if(movieReview) return next(createError(403, 'You have already created a review for this movie'));

        const savedMovieReview = await newMovieReview.save();
        await Movie.findByIdAndUpdate(req.body.movieId, {$inc: {totalStars: req.body.stars, startNumber: 1}});
        res.status(201).send(savedMovieReview);

    } catch (error: any) {
        next(error);
    }
};

export const deleteMovieReview = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete a movieReview'));
    try {
        const movieReview: IMovieReview | null = await MovieReview.findById(req.params.id);
        if(movieReview!.userId !== req.userId) {
            return next(createError(403, 'You can delete your own review only'))
        }

        await MovieReview.findByIdAndDelete(req.params.id);
        res.status(200).send('The movie Review has been deleted successfully');
    } catch (error: any) {
        next(error);
    }
};

export const getMovieReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movieReview = await MovieReview.find({movieId: req.params.movieId});
        if(!movieReview) return next(createError(401, 'There are no movie reviews'));
        res.status(200).send(movieReview);
    } catch (error: any) {
        next(error);
    }
}