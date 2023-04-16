import {NextFunction, Request, Response} from "express";
import ActorReview, {IActorReview} from "../models/actorReview.model.js";
import {createError} from "../utils/handleError.js";
import ActorModel, {IActor} from "../models/actor.model.js";
// import Actor from "../models/actor.model.js";

export const createActorReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.isAdmin) return next(createError(403, 'Admins can\'t create a review'));

        const review: IActor | null = await ActorModel.findById(req.params.actorId);

        const actorReview = await ActorReview.findOne({
            actorId: req.params.actorId,
            userId: req.userId
        });
        if(actorReview) return next(createError(403, 'You have already created a review for this actor'));

        const newActorReview = new ActorReview({
            actorId: req.body.actorId,
            userId: req.userId,
            review: req.body.review
        });

        review!.reviews.push(newActorReview);

        const savedActorReview = await newActorReview.save();
        const savedActor = await review!.save();
        res.status(201).send({message: 'actor review added',savedActorReview, savedActor});

    } catch (error: any) {
        next(error);
    }
};

export const deleteActorReview = async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.isAdmin) return next(createError(403, 'You are not allowed to delete a movieReview'));
    try {
        const actor: IActor | null = await ActorModel.findById(req.params.actorId);
        const actorReview: IActorReview | null = await ActorReview.findById(req.params.id);

        if(actorReview!.userId.toString() !== req!.userId) {
            return next(createError(403, 'You can delete your own review only'))
        }

        for (let i = 0, len = actor!.reviews.length; i < len; i++) {
            if (actor!.reviews[i]._id.toString() === req.params.id) {
                actor!.reviews.splice(i, 1);
                break;
            }
        }

        await actor!.save();
        await ActorReview.findByIdAndDelete(req.params.id)
        res.status(200).send('The actor Review has been deleted successfully');
    } catch (error: any) {
        next(error);
    }
};

export const getActorReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const actorReview = await ActorReview.find({actorId: req.params.actorId});
        if(!actorReview) return next(createError(401, 'There are no actor reviews'));
        res.status(200).send(actorReview);
    } catch (error: any) {
        next(error);
    }
}