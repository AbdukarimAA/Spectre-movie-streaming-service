import mongoose, { Schema, Types } from 'mongoose';

const movieSchema = new Schema<IMovie>({
    title: {type: String},
    shortDesc: {type: String},
    fullDesc: {type: String},
    audioLyrics: [String],
    posterImg: {type: String},
    titleImg: {type: String},
    rating: {type: String},
    year: {type: String},
    country: {type: String},
    duration: {type: String},
    typeOfMovie: {type: String},
    ageLimit: {type: String},
    language: {type: String},
    trailer: {type: String},
    video: {type: String},
    reviews: [String],
    genre: {type: String},
    originalTitle: {type: String},
    releaseDate: {type: String},
    director: {type: String},
    actors: [String],
    producers: [String],
    screenWriters: [String],
    operators: [String],
    quality: [String],
}, {timestamps: true});

export interface IMovie extends mongoose.Document{
    id: string,
    title: string,
    shortDesc: string,
    fullDesc: string,
    audioLyrics: string,
    posterImg: string,
    titleImg: string,
    rating: string,
    year: string,
    country: string,
    duration: string,
    typeOfMovie: string,
    ageLimit: string,
    language: string,
    trailer: string,
    video: string,
    reviews?: Types.Array<string>,
    genre: string,
    originalTitle: string,
    releaseDate: string,
    director: string,
    actors: Types.Array<string>,
    producers: Types.Array<string>,
    screenWriters: Types.Array<string>,
    operators: Types.Array<string>,
    quality: Types.Array<string>,
    _doc?: any
}

export default mongoose.model('Movie', movieSchema);


