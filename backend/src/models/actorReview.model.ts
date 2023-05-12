import mongoose, { Schema, model, connect } from 'mongoose';

export const actorReviewSchema = new Schema<IActorReview>({
    actorId: {type: String, required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    review: {type: String, required: true},
    date: {type: String}
}, {timestamps: true});

export interface IActorReview extends mongoose.Document{
    id: string,
    actorId: string,
    userId: any,
    review: string,
    date: string,
    _doc?: any
}

export default mongoose.model('actorReview', actorReviewSchema);


