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
    const [filterYear, setFilterYear] = useState<any>('')
    const [filterRating, setFilterRating] = useState<any>('')
    const [filterLang, setFilterLang] = useState<any>('')
    const [filterGenre, setFilterGenre] = useState<any>('')
    const [movies, setMovies] = useState<any>('')

    const test = useRef<any>();

    useEffect(() => {
        const getMoviesBySearch: any = async (e: any) => {
            setSpinner(true);
            await axiosRequest.get(`/movie/getAllMovies`)
                .then(res => {
                    setMovies(res.data)
                })
                .finally(() => setSpinner(false))
        }
        getMoviesBySearch();
    }, [])

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

    const searchFilteredMovies = async (e) => {
        // e.preventDefault()
        setFilterYear(e.target.value)
        await axiosRequest.get(`/movie/getAllMovies?year=${e.target.value}&genre=${filterGenre}&language=${filterLang}&rating=${filterRating}`)
            .then(res => {
                setMovies(res.data)
            })
            .finally(() => setSpinner(false))
    }

    if (spinner) return <Loader />;

    let years: any = [{}]

    for(let i = 2023; i >= 1920; i--) {
        years.push({
            year: i.toString()
        })

        console.log(years)
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
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={'Animation'}>Animation</MenuItem>
                        <MenuItem value={'Horror'}>Horror</MenuItem>
                        <MenuItem value={'Action'}>Action</MenuItem>
                        <MenuItem value={'Comedy'}>Comedy</MenuItem>
                        <MenuItem value={'Drama'}>Drama</MenuItem>
                        <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                        <MenuItem value={'Thriller'}>Thriller</MenuItem>
                        <MenuItem value={'Crime'}>Crime</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <InputLabel id="demo-simple-select-label">year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{width: '100%', margin: '10px'}}
                        value={filterYear}
                        label="Age"
                        ref={test}
                        onChange={searchFilteredMovies}
                    >
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
                        min={0}
                        max={10}
                    />
                </Box>
                <FormControl fullWidth sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <InputLabel id="demo-simple-select-label">language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{width: '100%', margin: '10px'}}
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={'Rus'}>Rus</MenuItem>
                        <MenuItem value={'Eng'}>Eng</MenuItem>
                    </Select>
                </FormControl>
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