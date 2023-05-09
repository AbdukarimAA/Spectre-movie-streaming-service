import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    CalendarToday,
    DeleteOutline,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from "@mui/icons-material";
import SideBar from "../../../adminComponents/sideBar/SideBar";
import "./AdminMovieEdit.scss";
import {useAppDispatch} from "../../../../store/redux-hook";
import {useAppSelector} from "../../../../hooks";
import {getMoviesSelector} from "../../../../store/slices/movieSlice/movieSelectors";
import {deleteMovie, getOneMovie, updateMovie} from "../../../../store/slices/movieSlice/movieSlice";
import {IMovie} from "../../../../utils/types/movieDataType";

export const AdminMovieEdit = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [movie, setMovie] = useState<IMovie | null>()

    const dispatch = useAppDispatch();
    const {oneMovie}: any = useAppSelector(getMoviesSelector);

    useEffect(() => {
        const getOneMovieFunc: any = async () => {
            await dispatch<any>(getOneMovie({id}))
        }

        getOneMovieFunc();
    }, [id])

    const handleUpdateMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie((prev: IMovie) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        // e.preventDefault()
        try {
            await dispatch<any>(updateMovie({...movie, _id: id}))
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async () => {
        console.log(id)
        await dispatch<any>(deleteMovie({id}))
        navigate('/admin/movies')
    }

    return (
        <div className="movie-edit-admin">
            <SideBar />
            {oneMovie.movie && <div className="movieContainer">
                <div className="movieUpdate">
                    <Link to="/newmovie">
                        <button className="movieAddButton">Create</button>
                    </Link>
                    <DeleteOutline
                        className="productListDelete"
                        onClick={() => handleDelete()}
                    />
                    <br/>
                    <span className="movieUpdateTitle">Edit Movie</span>
                    <form onSubmit={handleSubmit} className="movieUpdateForm">
                        <div className="movieUpdateLeft">
                            <div className="admin-movie-left">
                                <div className="movieUpdateItem">
                                    <label>title</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='title'
                                        placeholder={oneMovie.movie.title}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>Short desc</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='shortDesc'
                                        placeholder={oneMovie.movie.shortDesc}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>Full desc</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='fullDesc'
                                        placeholder={oneMovie.movie.fullDesc}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>duration</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='duration'
                                        placeholder={oneMovie.movie.duration}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>typeOfMovie</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='typeOfMovie'
                                        placeholder={oneMovie.movie.typeOfMovie}
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-info">
                                <div className="movieUpdateItem">
                                    <label>audioLyrics</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='audioLyrics'
                                        placeholder={oneMovie.movie.audioLyrics}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>rating</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='rating'
                                        placeholder={oneMovie.movie.rating}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>year</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='year'
                                        placeholder={oneMovie.movie.year}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>country</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='country'
                                        placeholder={oneMovie.movie.country}
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-crew">
                                <div className="movieUpdateItem">
                                    <label>director</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='director'
                                        placeholder={oneMovie.movie.director}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>actors</label>
                                    <input
                                        type="text"
                                        name='actors'
                                        placeholder={oneMovie.movie.actors}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>producers</label>
                                    <input
                                        type="text"
                                        name='producers'
                                        placeholder={oneMovie.movie.producers}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>screenWriters</label>
                                    <input
                                        type="text"
                                        name='screenWriters'
                                        placeholder={oneMovie.movie.screenWriters}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>operators</label>
                                    <input
                                        type="text"
                                        name='operators'
                                        placeholder={oneMovie.movie.operators}
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-urls">
                                <div className="movieUpdateItem">
                                    <label>trailer</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='trailer'
                                        placeholder={oneMovie.movie.trailer}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>video</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='video'
                                        placeholder={oneMovie.movie.video}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>posterImg</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='posterImg'
                                        placeholder={oneMovie.movie.posterImg}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>titleImg</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='titleImg'
                                        placeholder={oneMovie.movie.titleImg}
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-right">
                                <div className="movieUpdateItem">
                                    <label>ageLimit</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='ageLimit'
                                        placeholder={oneMovie.movie.ageLimit}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>language</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='language'
                                        placeholder={oneMovie.movie.language}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>genre</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='genre'
                                        placeholder={oneMovie.movie.genre}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>originalTitle</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='originalTitle'
                                        placeholder={oneMovie.movie.originalTitle}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>releaseDate</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='releaseDate'
                                        placeholder={oneMovie.movie.releaseDate}
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>quality</label>
                                    <input
                                        onChange={handleUpdateMovie}
                                        type="text"
                                        name='quality'
                                        placeholder={oneMovie.movie.quality}
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="movieUpdateRight">
                            <div className="movieUpdateUpload">
                                <img
                                    className="movieUpdateImg"
                                    src={oneMovie.movie.posterImg}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="movieUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="movieUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    );
};