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
        movie: any;
        status: Status;
    };
    movieReviews: {
        reviews: [];
        status: Status;
    }
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
        movie: null,
        status: Status.FirstLoading
    },
    movieReviews: {
        reviews: [],
        status: Status.FirstLoading
    }
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
    async ({type, genre}) => {
        const { data } = await axiosRequest.get(`list/getList${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`);

        return data;
    }
)

export const getOneMovie = createAsyncThunk(
    'movie/oneMovie',
    async ({id}) => {
        const { data } = await axiosRequest.get("/movie/getMovie/" + id);

        return data;
    }
)

export const getMovieReviews = createAsyncThunk(
    'movie/movieReviews',
    async ({id}) => {
        const { data } = await axiosRequest.get(`movieReview/getMovieReviews/` + id);
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
        builder.addCase(getMovieReviews.pending, (state: IMovieSlice) => {
            state.movieReviews.status = Status.Loading;
            state.movieReviews.reviews = null;
        })
        builder.addCase(getMovieReviews.rejected, (state: IMovieSlice) => {
            state.movieReviews.status = Status.Error;
            state.movieReviews.reviews = null;
        })
        builder.addCase(getMovieReviews.fulfilled, (state: IMovieSlice, action) => {
            state.movieReviews.status = Status.Success;
            state.movieReviews.reviews = action.payload;
        })
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
            state.lists.list = null;
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
            state.oneMovie.movie = null;
        })
        builder.addCase(getOneMovie.rejected, (state: IMovieSlice) => {
            state.oneMovie.status = Status.Error;
            state.oneMovie.movie = null;
        })
        builder.addCase(getOneMovie.fulfilled, (state: IMovieSlice, action) => {
            state.oneMovie.status = Status.Success;
            state.oneMovie.movie = action.payload;
        })
    }
})

export const movieReducer = movieSlice.reducer;