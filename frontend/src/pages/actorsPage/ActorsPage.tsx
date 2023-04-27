import React, {lazy, Suspense, useEffect, useState} from 'react';
import {ActorsPageActorCard} from "../../components/actorsPageActorCard/ActorsPageActorCard";
import {useAppSelector} from "../../hooks";
import {getActorsSelector} from "../../store/slices/actorSlice/actorSelectors";
import {useAppDispatch} from "../../store/redux-hook";
import {getActors} from "../../store/slices/actorSlice/actorSlice";
import Loader from "../../components/Loader/Loader";
import {IconButton} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import './ActorsPage.scss';
import {axiosRequest} from "../../utils/Request/newAxiosRequest";


const ActorsPage = () => {
    const [query, setQuery] = useState<any>('');
    const [actor, setActor] = useState<any>('')
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getActorsByName: any = async (e: any) => {
            setSpinner(true)
            await axiosRequest.get(`/actor/getActors?search=${query}`)
                .then(res => {
                    setActor(res.data)
                })
                .finally(() => setSpinner(false))
        }
        getActorsByName();
    }, [])

    const searchActor = async (e) => {
        setQuery(e.target.value)
        await axiosRequest.get(`/actor/getActors?search=${e.target.value}`)
            .then(res => {
                setActor(res.data)
            })
            .finally(() => setSpinner(false))
        // setMovies(data)
    };

    if (spinner) return <Loader />;

    return (
        <div className='actors-page'>
            <div className="actors-page-input">
                <TextField
                    className='actors-page-mui-input'
                    sx={{ input: { color: 'white' } }}
                    id="outlined-basic"
                    label="Search any actor"
                    variant="outlined"
                    onChange={searchActor}
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
            <div className="actors-page-container">
                <Suspense fallback={<Loader />}>
                    {
                        actor && actor.map(actor => (
                            <ActorsPageActorCard key={actor._id} actor={actor}/>
                        ))
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default ActorsPage;