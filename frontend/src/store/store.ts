import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice/authSlice";
import thunkMiddleware from 'redux-thunk';

// const rootReducer = combineReducers({
//     auth: authReducer
// });

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
