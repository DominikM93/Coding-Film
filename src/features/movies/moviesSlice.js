import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

export const fetchInTheaters = createAsyncThunk(
    "movies/fetchInTheaters",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/InTheaters/${process.env.APIKey}`
        ).then((res) => res.json());

        dispatch(setMovies(data.items));
        return "In Theaters";
    }
);

export const fetchByType = createAsyncThunk(
    "movies/fetchByType",
    async (type, {dispatch}) => {
        let fullType = "none";

        if (type === "Top 250 Movies") {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250Movies/${process.env.APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Top 250 Movies";
        } else if (type === "Top 250 Shows") {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250TVs/${process.env.APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Top 250 Shows";
        } else if (type === "Most Popular Movies") {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularMovies/${process.env.APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Most Popular Movies";
        } else if (type === "Most Popular Shows") {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularTVs/${process.env.APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Most Popular Shows";
        }

        return fullType;
    }
);

export const fetchSearch = createAsyncThunk(
    "movies/fetchSearch",
    async ({type, search}, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Search/${process.env.APIKey}/${search}`
        ).then((res) => res.json());
        dispatch(setMovies(data.results));
        return type;
    }
);

const moviesAdapter = createEntityAdapter({
    selectId: (movie) => movie.id,
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: moviesAdapter.getInitialState({
        loading: true,
        type: "Most Popular Movies",
    }),
    reducers: {
        setMovies: moviesAdapter.setAll,
    },
    extraReducers: {
        [fetchInTheaters.pending]: (state) => {
            state.loading = true;
        },
        [fetchInTheaters.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.type = payload;
        },
        [fetchByType.pending]: (state) => {
            state.loading = true;
        },
        [fetchByType.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.type = payload;
        },
        [fetchSearch.pending]: (state) => {
            state.loading = true;
        },
        [fetchSearch.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.type = payload;
        },
    },
});

export const getLoadingMovies = (state) => state.movies.loading;
export const getType = (state) => state.movies.type;

export const {setMovies} = moviesSlice.actions;
export const moviesSelectors = moviesAdapter.getSelectors(
    (state) => state.movies
);
export default moviesSlice.reducer;
