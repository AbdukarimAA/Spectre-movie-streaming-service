import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "./slices/authSlice/authSlice";
import {movieReducer} from "./slices/movieSlice/movieSlice";
import {movieReviewReducer} from "./slices/movieReviewSlice/movieReviewSlice";
import {actorReducer} from "./slices/actorSlice/actorSlice";
import {actorReviewReducer} from "./slices/actorReviewSlice/actorReviewSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
    actor: actorReducer,
    movieReview: movieReviewReducer,
    actorReview: actorReviewReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
