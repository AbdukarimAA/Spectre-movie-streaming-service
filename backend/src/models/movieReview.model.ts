import mongoose, { Schema, model, connect } from 'mongoose';

export const movieReviewSchema = new Schema<IMovieReview>({
    movieId: {type: String, required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
    // userId: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    stars: {type: Number, required: true, enum: [1, 2, 3, 4, 5]},
    date: String,
}, {timestamps: true});

export interface IMovieReview extends mongoose.Document{
    _id: string,
    movieId: string,
    userId: any,
    title: string,
    desc: string,
    stars: number,
    date: string,
    _doc?: any
}

export default mongoose.model('movieReview', movieReviewSchema);


