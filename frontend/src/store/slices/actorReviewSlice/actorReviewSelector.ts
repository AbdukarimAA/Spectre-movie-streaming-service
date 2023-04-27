import {RootState} from '../../store';
import {Status} from "../authSlice/authSlice";

export const getActorReviewsSelector = (state: RootState) => {
    return state.actorReview;
};