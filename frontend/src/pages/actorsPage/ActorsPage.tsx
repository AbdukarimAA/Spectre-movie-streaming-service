import React, {useEffect, useState} from 'react';
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

const ActorsPage = () => {
    const [query, setQuery] = useState<any>('');
    const [spinner, setSpinner] = useState(false);
    const {actors} = useAppSelector(getActorsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getAllActors: any = async () => {
            setSpinner(true);
            await dispatch<any>(getActors({query})).finally(() => setSpinner(false))
        }

        getAllActors()
    }, [])


    // useEffect(() => {
    //     const getAllActorsByRus: any = async () => {
    //         setSpinner(true);
    //         await dispatch<any>(getActorsByRusName({searchRus})).finally(() => setSpinner(false))
    //     }
    //
    //     getAllActorsByRus()
    // }, [searchRus])

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
                    onChange={e => setQuery(e.target.value)}
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
                {
                    actors.data && actors.data.map(actor => (
                        <ActorsPageActorCard key={actor._id} actor={actor}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ActorsPage;