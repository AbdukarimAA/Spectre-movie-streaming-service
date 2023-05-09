import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";
import {IList, IMovie} from "../../../utils/types/movieDataType";
import {Status} from "../authSlice/authSlice";

interface IMovieSlice {
    movie: {
        data: IMovie[];
        status: Status;
    };
    lists : {
        list: IList[];
        status: Status;
    };
    oneMovie: {
        movie: IMovie[];
        status: Status;
    };
}

const initialState: IMovieSlice = {
    movie: {
        data: [],
        status: Status.FirstLoading
    },
    lists: {
        list: [],
        status: Status.FirstLoading
    },
    oneMovie: {
        movie: [],
        status: Status.FirstLoading
    },
}

export const getRandomMovies = createAsyncThunk(
    'movie/randomMovie',
    async () => {
        const { data } = await axiosRequest.get('movie/getRandomMovie');
        return data;
    }
)

export const getListMovies = createAsyncThunk(
    'movie/listMovie',
    async ({type, genre}: any) => {
        const { data } = await axiosRequest.get(`list/getList${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`);

        return data;
    }
)

export const getOneMovie = createAsyncThunk(
    'movie/oneMovie',
    async ({id}: any) => {
        const { data } = await axiosRequest.get("/movie/getMovie/" + id);

        return data;
    }
)

export const updateMovie = createAsyncThunk(
    'movie/updateMovie',
    async ( info: IMovie) => {
        const { data } = await axiosRequest.put("/movie/updateMovie/" + info._id, {...info});

        return data;
    }
)

export const deleteMovie = createAsyncThunk(
    'movie/deleteMovie',
    async ({id}: any) => {
        const { data } = await axiosRequest.delete("/movie/deleteMovie/" + id);

        return data;
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        createMovie: (state: any, action: PayloadAction) => state.data = action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(getRandomMovies.pending, (state: IMovieSlice) => {
            state.movie.status = Status.Loading;
            state.movie.data = null;
        })
        builder.addCase(getRandomMovies.rejected, (state: IMovieSlice) => {
            state.movie.status = Status.Error;
            state.movie.data = null;
        })
        builder.addCase(getRandomMovies.fulfilled, (state: IMovieSlice, action) => {
            state.movie.status = Status.Success;
            state.movie.data = action.payload;
        })
        builder.addCase(getListMovies.pending, (state: IMovieSlice) => {
            state.lists.status = Status.Loading;
            // state.lists.list = null;
        })
        builder.addCase(getListMovies.rejected, (state: IMovieSlice) => {
            state.lists.status = Status.Error;
            state.lists.list = null;
        })
        builder.addCase(getListMovies.fulfilled, (state: IMovieSlice, action) => {
            state.lists.status = Status.Success;
            state.lists.list = action.payload;
        })
        builder.addCase(getOneMovie.pending, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Loading;
        })
        builder.addCase(getOneMovie.rejected, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Error;
            state.oneMovie.movie = null;
        })
        builder.addCase(getOneMovie.fulfilled, (state: IMovieSlice, action) => {
            state.oneMovie.status = Status.Success;
            state.oneMovie.movie = action.payload
        })
        builder.addCase(updateMovie.pending, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Loading;
        })
        builder.addCase(updateMovie.rejected, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Error;
            // state.oneMovie.movie = null;
        })
        builder.addCase(updateMovie.fulfilled, (state: IMovieSlice, action) => {
            state.oneMovie.status = Status.Success;
            // state.oneMovie.movie = action.payload
        })
        builder.addCase(deleteMovie.pending, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Loading;
        })
        builder.addCase(deleteMovie.rejected, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Error;
            // state.oneMovie.movie = null;
        })
        builder.addCase(deleteMovie.fulfilled, (state: IMovieSlice, action) => {
            state.oneMovie.status = Status.Success;
            // state.oneMovie.movie = action.payload
        })
    }
});

export const movieReducer = movieSlice.reducer;