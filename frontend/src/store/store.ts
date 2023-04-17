import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "./slices/authSlice/authSlice";
import {movieReducer} from "./slices/movieSlice/movieSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
