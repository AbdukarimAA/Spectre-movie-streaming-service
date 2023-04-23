import {RootState} from '../../store';
import {Status} from "../authSlice/authSlice";

export const getActorsSelector = (state: RootState) => {
    return state.actor;
};

export const getOneActorsSelector = (state: RootState) => {
    return state.actor.oneActor;
};