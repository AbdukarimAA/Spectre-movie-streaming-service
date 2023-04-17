import mongoose, { Schema, model, connect } from 'mongoose';

export const actorReviewSchema = new Schema<IActorReview>({
    actorId: {type: String, required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    review: {type: String, required: true},
}, {timestamps: true});

export interface IActorReview extends mongoose.Document{
    id: string,
    actorId: string,
    userId: any,
    review: string,
    _doc?: any
}

export default mongoose.model('actorReview', actorReviewSchema);


