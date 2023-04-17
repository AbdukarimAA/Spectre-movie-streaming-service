import {RootState} from '../../store';
import {Status} from "../authSlice/authSlice";

export const getMoviesSelector = (state: RootState) => {
    return state.movie;
};

export const getMoviesSelectorLoading = (state: RootState) => {
    return state.movie.movie.status
};