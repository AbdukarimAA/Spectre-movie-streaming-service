import {IActorReview} from "../../../utils/types/actorDataType";
import {Status} from "../authSlice/authSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";

interface IActorReviewSlice {
    actorReview: {
        review: IActorReview[],
        status: Status
    }
}

const initialState: IActorReviewSlice = {
    actorReview: {
        review: [],
        status: Status.FirstLoading
    }
}

export const createActorReview = createAsyncThunk(
    'actorReview/review',
    async ({id, actorId, userId, review}: IActorReview) => {
        const { data } = await axiosRequest.post(`actorReview/createActorReview/` + id, {actorId, userId, review});
        return data;
    }
)

export const getActorReviews = createAsyncThunk(
    'actorReview/getActorReviews',
    async ({id}: any) => {
        const { data } = await axiosRequest.get(`actorReview/getActorReviews/` + id);
        return data;
    }
)

const actorReviewSlice = createSlice({
        name: 'actorReviewSlice',
        initialState,
        reducers: {
            createActorReview: (state: any, action: PayloadAction) => state.data = action.payload
        },
        extraReducers: (builder) => {
            builder.addCase(createActorReview.pending, (state: IActorReviewSlice) => {
                state.actorReview.status = Status.Loading;
                state.actorReview.review = null
            })
            builder.addCase(createActorReview.rejected, (state: IActorReviewSlice) => {
                state.actorReview.status = Status.Error;
                state.actorReview.review = null
            })
            builder.addCase(createActorReview.fulfilled, (state: IActorReviewSlice, action) => {
                state.actorReview.status = Status.Success;
                state.actorReview.review = action.payload
            })
            builder.addCase(getActorReviews.pending, (state: IActorReviewSlice) => {
                state.actorReview.status = Status.Loading;
                state.actorReview.review = null
            })
            builder.addCase(getActorReviews.rejected, (state: IActorReviewSlice) => {
                state.actorReview.status = Status.Error;
                state.actorReview.review = null
            })
            builder.addCase(getActorReviews.fulfilled, (state: IActorReviewSlice, action) => {
                state.actorReview.status = Status.Success;
                state.actorReview.review = action.payload
            })
        }
})

export const actorReviewReducer = actorReviewSlice.reducer