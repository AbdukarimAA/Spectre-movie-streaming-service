import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IUserRegister} from "../../../utils/types/userRegisterType";
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";

export enum Status {
    FirstLoading = 'firstLoading',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

type TUserLogin = Pick<IUserRegister, "email" | "password">;

interface IAuthSlice {
    data: IUserRegister | null;
    status: Status;
}

const initialState = {
    data: null,
    status: Status.Loading,
} as  IAuthSlice ;

export const authLogin = createAsyncThunk(
    'auth/userLogin',
    async ({ email, password } : { email: string; password: string }) => {
        const { data } = await axiosRequest.post('/auth/login', { email, password });

        localStorage.setItem('currentUser', JSON.stringify(data));

        const { token, ...payload } = data;

        return payload;
    }
);

export const authRegister = createAsyncThunk(
    'auth/userRegister',
    async (userInfo: IUserRegister) => {
        const { data } = await axiosRequest.post('auth/register', userInfo);

        localStorage.setItem('currentUser', JSON.stringify(data));

        const { token, ...payload } = data;

        return payload;
    }
)

export const authLogout = createAsyncThunk(
    'auth/userLogout',
    async () => {
        const { data } = await axiosRequest.post('/auth/logout');

        localStorage.setItem('currentUser', null);

        return data;
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout: (state: any) => {
            state.data = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authRegister.pending, (state: IAuthSlice) => {
                state.status = Status.Loading;
                state.data = null;
            })
            .addCase(authRegister.fulfilled, (state: IAuthSlice, action) => {
                state.data = action.payload;
                state.status = Status.Success;
            })
            .addCase(authRegister.rejected, (state: IAuthSlice) => {
                state.status = Status.Error;
                state.data = null;
            })
            // .addCase(authLogout.pending, (state: IAuthSlice) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(authLogout.fulfilled, (state: IAuthSlice) => {
            //     state.loading = false;
            //     state.error = null;
            // })
            // .addCase(authLogout.rejected, (state: IAuthSlice, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })
            .addCase(authLogin.pending, (state: IAuthSlice, action) => {
                state.status = Status.Loading;
                state.data = null;
            })
            .addCase(authLogin.fulfilled, (state: IAuthSlice, action) => {
                state.data = action.payload;
                state.status = Status.Success;
            })
            .addCase(authLogin.rejected, (state: IAuthSlice, action) => {
                state.status = Status.Error;
                state.data = null;
            })
    }
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;