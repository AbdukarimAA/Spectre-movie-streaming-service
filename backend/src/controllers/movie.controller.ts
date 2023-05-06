import {NextFunction, Request, Response} from "express";
import Movie, {IMovie} from "../models/movie.model.js";
import {createError} from "../utils/handleError.js";
import MovieReviewModel, {IMovieReview} from "../models/movieReview.model.js";
import Actor, {IActor} from "../models/actor.model.js";

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to create a movie'));
    const newMovie = new Movie({
        ...req.body,
    });

    try {

        const savedMovie = await newMovie.save();
        res.status(201).send(savedMovie);
    } catch (error: any) {
        next(error);
    }
};

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAdmin) return next(createError(403, 'You are not allowed to update a movie'));
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
       const deleteMovie: IMovie | null = await Movie.findOne({_id: req.params.id});
       await Movie.findByIdAndDelete(req.params.id);

       res.status(200).send('The movie has been deleted successfully');
    } catch (error: any) {
        next(error);
    }
};

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to get all movies'));
    try {
        const {genre, duration, language, rating, year, search, searchRus} = req.query;
        let query = {
            ...(genre && {genre}),
            ...(duration && {duration}),
            ...(language && {language}),
            ...(rating && {rating}),
            ...(year && {year}),
            ...(search && {title: {$regex: search, $options: 'i'}}),
            // ...(search && {title: {$regex: search, $options: 'i'}})
        };

        //page func
        const page = Number(req.query.pageNumber) || 1;
        const limit = 2;
        const skip = (page - 1) * limit;

        //find movies by query
        const queryMovies = await Movie.find(query).sort({createdAt: -1});
        const countMovies = await Movie.countDocuments(query);
        // const movies = await Movie.find().sort({_id: -1});

        res.status(200).send(queryMovies);
    } catch (error: any) {
        next(error);
    }
}

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, {
            reviews: await MovieReviewModel.find({movieId: req.params.id}).select('title desc stars'),
        })
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};

export const getMovieByGenre = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genreQuery = req.query.genre;
        const movie = await Movie.findByIdAndUpdate(req.params.id, {
            reviews: await MovieReviewModel.find({movieId: req.params.id}).select('title desc stars'),
        })
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};

export const getTopRatedMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = await Movie.find({}).sort({rating: -1});
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};

export const getRecommendations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId} = req.body
        const ratings = await MovieReviewModel.find({ userId }).populate('Movie');

        const movies: any = {};
        ratings.forEach((rating) => {
            const movieIdTest = rating.movieId.toString();
            if (!movies[movieIdTest]) {
                movies[movieIdTest] = {
                    sum: 0,
                    count: 0,
                };
            }
            movies[movieIdTest].sum += rating.stars;
            movies[movieIdTest].count++;
        });

        const movieRatings: any = [];
        for (let movieId in movies) {
            const rating = movies[movieId].sum / movies[movieId].count;
            movieRatings.push({ movieId, rating });
        }

        movieRatings.sort((a: any, b: any) => b.rating - a.rating);
        const topMovies = movieRatings.slice(0, 10);

        res.status(200).json({ topMovies });
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
                        size: 10
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
                        size: 10
                    },
                }
            ])
        }
        res.status(200).send(movie);
    } catch (error: any) {
        next(error);
    }
};

///*{/*, page, pages: Math.ceil(countMovies / limit), totalMovies: countMovies}*/}*/