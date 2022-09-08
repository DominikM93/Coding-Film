import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

export const fetchSearchName = createAsyncThunk(
    "actors/fetchSearchName",
    async (searchTerm, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/SearchName/${process.env.APIKey}/${searchTerm}`
        ).then((res) => res.json());

        dispatch(setActors(data.results));
    }
);

const actorsAdapter = createEntityAdapter({
    selectId: (actor) => actor.id,
});

const actorsSlice = createSlice({
    name: "actors",
    initialState: actorsAdapter.getInitialState({loading: true}),
    reducers: {setActors: actorsAdapter.setAll},
    extraReducers: {
        [fetchSearchName.pending]: (state) => {
            state.loading = true;
        },
        [fetchSearchName.fulfilled]: (state) => {
            state.loading = false;
        },
    },
});

export const actorsSelectors = actorsAdapter.getSelectors(
    (state) => state.actors
);
export const getLoading = (state) => state.actors.loading;
export const {setActors} = actorsSlice.actions;
export default actorsSlice.reducer;
