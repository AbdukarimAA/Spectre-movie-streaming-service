import {Status} from "../authSlice/authSlice";
import {IMovieReview} from "../../../utils/types/movieDataType";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";

interface IMovieReviewSlice {
    movieReview: {
        data: IMovieReview[],
        status: Status
    };
}

const initialState: IMovieReviewSlice = {
    movieReview: {
        data: [],
        status: Status.FirstLoading
    }
}

export const createMovieReview = createAsyncThunk(
    'movieReview/review',
    async ({id, movieId, userId, title, desc, stars}: IMovieReview) => {
        const { data } = await axiosRequest.post(`/movieReview/createMovieReview/` + id, {movieId, title, desc, stars, userId});
        return data;
    }
)

export const getMovieReviews = createAsyncThunk(
    'movie/getMovieReviews',
    async ({id}) => {
        const { data } = await axiosRequest.get(`movieReview/getMovieReviews/` + id);
        return data;
    }
)

const movieReviewSlice = createSlice({
    name: 'movieReviewSlice',
    initialState,
    reducers: {
        createMovieReview: (state: any, action: PayloadAction) => state.data = action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieReviews.pending, (state: IMovieReviewSlice) => {
            state.movieReview.status = Status.Loading;
            // state.movieReview.data = null;
        })
        builder.addCase(getMovieReviews.rejected, (state: IMovieReviewSlice) => {
            state.movieReview.status = Status.Error;
            state.movieReview.data = null;
        })
        builder.addCase(getMovieReviews.fulfilled, (state: IMovieReviewSlice, action) => {
            state.movieReview.status = Status.Success;
            state.movieReview.data = action.payload;
        })
        builder.addCase(createMovieReview.pending, (state: IMovieReviewSlice) => {
            state.movieReview.status = Status.UpdateLoading;
            // state.movieReview.data = null;
        })
        builder.addCase(createMovieReview.rejected, (state: IMovieReviewSlice) => {
            state.movieReview.status = Status.Error;
            state.movieReview.data = null;
        })
        builder.addCase(createMovieReview.fulfilled, (state: IMovieReviewSlice, action) => {
            state.movieReview.status = Status.Success;
            state.movieReview.data = action.payload;
        })
    }
});

export const movieReviewReducer = movieReviewSlice.reducer