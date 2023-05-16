import React, {Suspense, useEffect, useRef, useState} from 'react';
import './MovieSearchPage.scss';
import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import MovieSearch from "../../components/MovieSearchFlex/MovieSearch";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import Loader from "../../components/Loader/Loader";
import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';

const MovieSearchPage = () => {
    const [spinner, setSpinner] = useState(false);
    const [query, setQuery] = useState<any>('');
    const [test, setTest] = useState<any>({
        year: '',
        genre: '',
        rating: '',
        language: ''
    })
    const [movies, setMovies] = useState<any>('')

    // useEffect(() => {
    //     window.location.reload()
    // }, [test])

    useEffect(() => {
        const getMoviesBySearch: any = async (e: any) => {
            setSpinner(true);
            await axiosRequest.get
            (`/movie/getAllMovies?year=${test.year}&genre=${test.genre}&language=${test.language}&rating=${test.rating}`)
                .then(res => {
                    setMovies(res.data)
                })
                .finally(() => setSpinner(false))
        }
        getMoviesBySearch();
    }, [test.year, test.genre, test.language])

    const searchMovie = async (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        await axiosRequest.get(`/movie/getAllMovies?search=${e.target.value}`)
            .then(res => {
                setMovies(res.data)
            })
            .finally(() => setSpinner(false))
        // setMovies(data)
    };

    const searchMovieRating = async (e) => {
        e.preventDefault()
        setTest({...test, rating: e.target.value})
        await axiosRequest.get(`/movie/getAllMovies?year=${test.year}&genre=${test.genre}&language=${test.language}&rating=${e.target.value}`)
            .then(res => {
                setMovies(res.data)
            })
            .finally(() => setSpinner(false))
        // setMovies(data)
    };

    const handleClearFilters = () => {
        setTest({
            genre: '',
            year: '',
            language: '',
            rating: ''
        })
        window.location.reload()
    }

    if (spinner) return <Loader />;

    let years: any = [{}]

    for(let i = 2023; i >= 1920; i--) {
        years.push({
            year: i.toString()
        })
    }

    return (
        <div className='movies-search-page'>
            <div className="movies-search-page-filters">
                <FormControl fullWidth sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <InputLabel id="demo-simple-select-label">genre</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{width: '100%', margin: '10px'}}
                        onChange={e => setTest({...test, genre: e.target.value})}
                        value={test.genre}
                    >
                        <MenuItem value=''>Все фильмы</MenuItem>
                        <MenuItem value='Анимация'>Анимация</MenuItem>
                        <MenuItem value='Ужасы'>Ужасы</MenuItem>
                        <MenuItem value='Экшн'>Экшн</MenuItem>
                        <MenuItem value='Комедия'>Комедия</MenuItem>
                        <MenuItem value='Драма'>Драма</MenuItem>
                        <MenuItem value='Фантастика'>Фантастика</MenuItem>
                        <MenuItem value='Триллер'>Триллер</MenuItem>
                        <MenuItem value='Криминал'>Криминал</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <InputLabel id="demo-simple-select-label">year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{width: '100%', margin: '10px'}}
                        value={test.year}
                        label="Age"
                        onChange={e => setTest({...test, year: e.target.value})}
                    >
                        <MenuItem value=''>Все года</MenuItem>
                        {
                            years && years.map(item => (
                                <MenuItem value={item.year}>{item.year}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Box width={800} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={5}
                        max={10}
                        // value={test.rating}
                        onChange={searchMovieRating}
                    />
                </Box>
                <FormControl fullWidth sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <InputLabel id="demo-simple-select-label">language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{width: '100%', margin: '10px'}}
                        value={test.language}
                        onChange={e => setTest({...test, language: e.target.value})}
                    >
                        <MenuItem value={''}>Все языки</MenuItem>
                        <MenuItem value={'Рус'}>Рус</MenuItem>
                        <MenuItem value={'Анг'}>Анг</MenuItem>
                    </Select>
                </FormControl>
                <button className='movie-search-page-button' onClick={handleClearFilters}>Очистить</button>
            </div>
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
                        movies && movies.length !== 0 ? movies.map(movie => (
                            <MovieSearch movie={movie} key={movie._id}/>
                        )) : 'Фильмов нет'
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default MovieSearchPage;