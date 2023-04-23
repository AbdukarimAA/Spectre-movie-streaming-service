import {RootState} from '../../store';
import {Status} from "../authSlice/authSlice";

export const getMovieReviewsSelector = (state: RootState) => {
    return state.movieReview;
};
export const getMoviesSelectorLoading = (state: RootState) => {
    return state.movieReview.movieReview.status
};