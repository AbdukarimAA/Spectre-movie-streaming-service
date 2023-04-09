import mongoose, {Schema, model, connect, Types} from 'mongoose';
import {actorReviewSchema} from "./actorReview.model.js";

const actorSchema = new Schema<IActor>({
    nameRus: {type: String, required: true},
    nameEng: {type: String, required: true},
    totalMovies: {type: Number, required: true},
    img: {type: String, required: true},
    shortBio: {type: String, required: true},
    bio: {type: String, required: true},
    fullBio: {type: String, required: true},
    reviews: [actorReviewSchema],
    // reviews: [String],
    movies: {type: [{}], ref: 'Movie'},
}, {timestamps: true});

export interface IActor extends mongoose.Document{
    id: string,
    nameRus: string,
    nameEng: string,
    totalMovies: number,
    img: string,
    shortBio: string,
    bio: string,
    fullBio: string,
    reviews?: any,
    movies?: Types.Array<Object>,
    _doc?: any
}

export default mongoose.model('Actor', actorSchema);


