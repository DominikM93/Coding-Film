import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchActorById = createAsyncThunk(
    "actor/fetchActorById",
    async (id) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Name/${process.env.REACT_APP_APIKey}/${id}`
        ).then((res) => res.json());

        return data;
    }
);

const actorSlice = createSlice({
    name: "actor",
    initialState: {actor: {}, loading: true},
    reducers: {},
    extraReducers: {
        [fetchActorById.pending]: (state) => {
            state.loading = true;
        },
        [fetchActorById.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.actor = payload;
        },
    },
});

export const getActor = (state) => state.actor.actor;
export const getActorLoading = (state) => state.actor.loading;
export default actorSlice.reducer;
