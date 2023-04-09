import mongoose, { Schema, Types } from 'mongoose';
import {movieReviewSchema} from "./movieReview.model.js";

const movieSchema = new Schema<IMovie>({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String},
    shortDesc: {type: String},
    fullDesc: {type: String},
    audioLyrics: String,
    posterImg: {type: String},
    titleImg: {type: String},
    rating: {type: Number},
    totalStars: {type: Number, default: 0,},
    starNumber: {type: Number, default: 0,},
    year: {type: String},
    country: {type: String},
    duration: {type: String},
    typeOfMovie: {type: String}, //its family or any else
    ageLimit: {type: String},
    language: {type: String},
    trailer: {type: String},
    video: {type: String},
    reviews: [movieReviewSchema],
    // reviews: {type: [{}], ref: 'movieReview'},
    genre: {type: String},
    originalTitle: {type: String},
    releaseDate: {type: String},
    director: {type: String},
    actors: [{
        nameRus: {type: String, required: true},
        img: {type: String, required: true},
    }],
    // actors: {type: [{}], ref: 'Actor'},
    producers: [String],
    screenWriters: [String],
    operators: [String],
    quality: [String],
    isCartoon: {type: Boolean, default: false}
}, {timestamps: true});

export interface IMovie extends mongoose.Document{
    id?: string,
    userId?: any
    title: string,
    shortDesc: string,
    fullDesc: string,
    audioLyrics: string,
    posterImg: string,
    titleImg: string,
    rating: any,
    totalStars: number,
    starNumber: number,
    year: string,
    country: string,
    duration: string,
    typeOfMovie: string,
    ageLimit: string,
    language: string,
    trailer: string,
    video: string,
    reviews?: any,
    // reviews?: Types.Array<Object>,
    genre: string,
    originalTitle: string,
    releaseDate: string,
    director: string,
    actors: Types.Array<Object>,
    producers: Types.Array<string>,
    screenWriters: Types.Array<string>,
    operators: Types.Array<string>,
    quality: Types.Array<string>,
    isCartoon: boolean,
    _doc?: any
    reverse?: any
}

export default mongoose.model('Movie', movieSchema);


