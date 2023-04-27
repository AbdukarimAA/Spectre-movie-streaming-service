import React, {Suspense, useEffect, useState} from 'react';
import './MovieSearchPage.scss';
import {IconButton} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import MovieSearch from "../../components/MovieSearchFlex/MovieSearch";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import Loader from "../../components/Loader/Loader";

const MovieSearchPage = () => {
    const [spinner, setSpinner] = useState(false);
    const [query, setQuery] = useState<any>('');
    const [movies, setMovies] = useState<any>('')

    useEffect(() => {
        const getMoviesBySearch: any = async (e: any) => {
            setSpinner(true);
            await axiosRequest.get(`/movie/getAllMovies?search=${query}`)
                .then(res => {
                    setMovies(res.data)
                })
                .finally(() => setSpinner(false))
        }
        getMoviesBySearch();
    }, [])

    const searchMovie = async (e) => {
        setQuery(e.target.value)
        await axiosRequest.get(`/movie/getAllMovies?search=${e.target.value}`)
            .then(res => {
                setMovies(res.data)
            })
            .finally(() => setSpinner(false))
        // setMovies(data)
    };

    if (spinner) return <Loader />;

    return (
        <div className='movies-search-page'>
            <div className="movies-search-page-container">
                <TextField
                    className='actors-page-mui-input'
                    sx={{ input: { color: 'white' } }}
                    id="outlined-basic"
                    label="Search any movie"
                    variant="outlined"
                    onChange={searchMovie}
                    value={query}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                        ),
                    }}
                />
            </div>
            <div className="movies-search-page-container-bottom">
                <Suspense fallback={<Loader/>}>
                    {
                        movies && movies.map(movie => (
                            <MovieSearch movie={movie} key={movie._id}/>
                        ))
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default MovieSearchPage;