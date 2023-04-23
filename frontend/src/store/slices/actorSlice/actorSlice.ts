import {IActorDataType} from "../../../utils/types/actorDataType";
import {Status} from "../authSlice/authSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {axiosRequest} from "../../../utils/Request/newAxiosRequest";

interface IActorSlice {
    actors: {
        data: IActorDataType[],
        status: Status
    },
    oneActor: {
        actor: any,
        status: Status
    }
}

const initialState: IActorSlice = {
    actors: {
        data: [],
        status: Status.FirstLoading
    },

    oneActor: {
        actor: null,
        status: Status.FirstLoading
    }
}

export const getActors = createAsyncThunk(
    'actors/getActors',
    async ({query}) => {
        const {data} = query ? await axiosRequest.get(`actor/getActors?search=${query}`) : await axiosRequest.get(`actor/getActors`);
        return data;
    }
);

export const getOneActor = createAsyncThunk(
    'actor/getActor',
    async ({id}) => {
        const {data} = await axiosRequest.get(`actor/getActor/` + id )
        return data
    }
)

const actorSlice = createSlice({
    name: 'actorSlice',
    initialState,
    reducers: {
        createActor: (state: any, action: PayloadAction) => state.data = action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(getActors.pending, (state: IActorSlice) => {
            state.actors.status = Status.FirstLoading;
            state.actors.data = null
        })
        builder.addCase(getActors.rejected, (state: IActorSlice) => {
            state.actors.status = Status.Error;
            state.actors.data = null;
        })
        builder.addCase(getActors.fulfilled, (state: IActorSlice, action) => {
            state.actors.status = Status.Success;
            state.actors.data = action.payload
        })
        builder.addCase(getOneActor.pending, (state: IActorSlice) => {
            state.oneActor.status = Status.FirstLoading;
            // state.oneActor.actor = null
        })
        builder.addCase(getOneActor.rejected, (state: IActorSlice) => {
            state.oneActor.status = Status.Error;
            state.oneActor.actor = null;
        })
        builder.addCase(getOneActor.fulfilled, (state: IActorSlice, action) => {
            state.oneActor.status = Status.Success;
            state.oneActor.actor = action.payload
        })
    }
})

export const actorReducer = actorSlice.reducer;