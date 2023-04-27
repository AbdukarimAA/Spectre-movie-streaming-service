import React, {useEffect, useState} from 'react';
import './LikedMoviesCard.scss';
import {useAppDispatch} from "../../hooks";
import {useAppSelector} from "../../store/redux-hook";
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import {IMovie} from "../../utils/types/movieDataType";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {Link} from "react-router-dom";
import {deleteOneLikedMovies} from "../../store/slices/authSlice/authSlice";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";

const LikedMoviesCard = ({id}) => {
    const [likedMovies, setLikedMovies] = useState<IMovie>(null);
    const dispatch = useAppDispatch();

    const currentUser = getCurrentUser();

    useEffect(() => {
        const getLikedMovies: any = async () => {
            window.scrollTo(0, 0);
            await axiosRequest.get(`/movie/getMovie/${id}`)
                .then(res => {
                    setLikedMovies(res.data)
                })
        }
        getLikedMovies();
    }, [id])

    const handleDelete = () => {
        dispatch<any>(deleteOneLikedMovies({id: currentUser._id, movieId: id}))
        alert('Favorite movie has been deleted')
        window.location.reload();
    }

    return (
        <div className='liked-movies-card'>
            {<Link to={`/film/${id}`} className='link'>
                {
                    likedMovies &&
                        <div className="liked-movies-card-container">
                            <img
                                src={likedMovies.posterImg}
                                alt=""
                            />
                            <div className="liked-movies-card-container-div">
                                <span>Movie Title</span>
                                <span>{likedMovies.title}</span>
                            </div>
                        </div>
                }
            </Link>
            }
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default LikedMoviesCard;