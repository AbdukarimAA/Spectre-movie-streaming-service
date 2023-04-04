import mongoose, { Schema, model, connect } from 'mongoose';

const actorReviewSchema = new Schema<IActorReview>({
    actorId: {type: String, required: true},
    userId: {type: String, required: true},
    review: {type: String, required: true},
}, {timestamps: true});

export interface IActorReview extends mongoose.Document{
    id: string,
    actorId: string,
    userId: string,
    review: string,
    _doc?: any
}

export default mongoose.model('actorReview', actorReviewSchema);


