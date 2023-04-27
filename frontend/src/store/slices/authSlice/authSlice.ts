import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IUserRegister} from "../../../utils/types/userRegisterType";
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";
import {IMovie} from "../../../utils/types/movieDataType";

export enum Status {
    FirstLoading = 'firstLoading',
    UpdateLoading = 'updateLoading',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

export type TUserLogin = Pick<IUserRegister, "email" | "password">;

interface IAuthSlice {
    data: IUserRegister | null;
    status: Status;

    user: {
        user: IUserRegister[],
        status: Status
    }
}

const initialState = {
    data: null,
    status: Status.Loading,
    user: {
        user: [],
        status: Status.FirstLoading
    }
} as  IAuthSlice ;

export const getOneUser = createAsyncThunk(
    'likedMovie/getOneUserById',
    async ({userId}: any) => {
        const {data} = await axiosRequest.get(`/user/getUser/${userId}`)
        return data;
    }
)

export const getAllUsers = createAsyncThunk(
    'likedMovie/getAllUsers',
    async () => {
        const {data} = await axiosRequest.get(`/user/getUsers`)
        return data;
    }
)

export const addLikedMovies = createAsyncThunk(
    'likedMovie/addLiked',
    async ({userId, movieId}: any) => {
        const {data} = await axiosRequest.post(`/user/createFavorite/${userId}`, {movieId})
        return data;
    }
)

export const deleteOneLikedMovies = createAsyncThunk(
    'likedMovie/deleteLiked',
    async ({id, movieId}: any) => {
        const {data} = await axiosRequest.delete(`/user/deleteFavorite/${id}/${movieId}`)
        return data;
    }
)

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
    async ({email, username, password, img, age, phone, isAdmin}: IUserRegister) => {
        const { data } = await axiosRequest.post('auth/register', {email, username, password, img, age, phone, isAdmin});

        console.log('Json', JSON.stringify(data))
        localStorage.setItem('currentUser', JSON.stringify(data));

        const { token, ...payload } = data;

        return payload;
    }
)

export const authLogout = createAsyncThunk(
    'auth/userLogout',
    async (_) => {
        const { data } = await axiosRequest.post('/auth/logout');

        // localStorage.setItem('currentUser', null);

        return data
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
            .addCase(deleteOneLikedMovies.fulfilled, (state: IAuthSlice, action) => {
                state.user.status = Status.Success;
                state.user.user = state.user.user.filter((item) => item.likedMovies.filter((movie) => {
                    movie !== action.payload.movie
                }));
            })
            .addCase(addLikedMovies.pending, (state: IAuthSlice) => {
                state.user.status = Status.Loading;
                state.user.user = null;
            })
            .addCase(addLikedMovies.fulfilled, (state: IAuthSlice, action) => {
                state.user.user = action.payload;
                state.user.status = Status.Success;
            })
            .addCase(addLikedMovies.rejected, (state: IAuthSlice) => {
                state.user.status = Status.Error;
                state.user.user = null;
            })
            .addCase(getOneUser.pending, (state: IAuthSlice) => {
                state.user.status = Status.Loading;
                state.user.user = null;
            })
            .addCase(getOneUser.fulfilled, (state: IAuthSlice, action) => {
                state.user.user = action.payload;
                state.user.status = Status.Success;
            })
            .addCase(getOneUser.rejected, (state: IAuthSlice) => {
                state.user.status = Status.Error;
                state.user.user = null;
            })
            .addCase(getAllUsers.pending, (state: IAuthSlice) => {
                state.user.status = Status.Loading;
                state.user.user = null;
            })
            .addCase(getAllUsers.fulfilled, (state: IAuthSlice, action) => {
                // state.user.user = action.payload;
                state.user.status = Status.Success;
                state.user.user = action.payload;
            })
            .addCase(getAllUsers.rejected, (state: IAuthSlice) => {
                state.user.status = Status.Error;
                state.user.user = null;
            })
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
            .addCase(authLogout.pending, (state: IAuthSlice) => {
                state.status = Status.Loading;
                state.data = null;
            })
            .addCase(authLogout.fulfilled, (state: IAuthSlice, action) => {
                state.data = null;
                state.status = Status.Success;
            })
            .addCase(authLogout.rejected, (state: IAuthSlice, action) => {
                state.status = Status.Error;
                state.data = null;
            })
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