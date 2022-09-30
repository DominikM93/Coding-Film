import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

export const fetchInTheaters = createAsyncThunk(
    "movies/fetchInTheaters",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_APIKey}`
        ).then((res) => res.json());

        dispatch(setMovies(data.items));
        return "theaters";
    }
);

export const fetchMovieById = createAsyncThunk(
    "movies/fetchMovieById",
    async ({id, allIds}, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_APIKey}/${id}/Images,Wikipedia`
        ).then((res) => res.json());

        const newMovieInfo = {...data, loading: false};

        if (allIds.includes(id)) {
            dispatch(updateMovie({id, changes: newMovieInfo}));
        } else {
            dispatch(addMovie(newMovieInfo));
        }
    }
);

export const fetchByType = createAsyncThunk(
    "movies/fetchByType",
    async (type, {dispatch}) => {
        let fullType = "none";

        if (type === 2) {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "topMovies";
        } else if (type === 3) {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250TVs/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "topShows";
        } else if (type === 4) {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "popularMovies";
        } else if (type === 5) {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "popularShows";
        }

        return fullType;
    }
);

export const fetchSearchTitle = createAsyncThunk(
    "movies/fetchSearchTitle",
    async (searchTerm, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/SearchTitle/${process.env.REACT_APP_APIKey}/${searchTerm}`
        ).then((res) => res.json());

        dispatch(setMovies(data.results));
        return "Search";
    }
);

const moviesAdapter = createEntityAdapter({
    selectId: (movie) => movie.id,
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: moviesAdapter.getInitialState({
        loading: true,
        type: "",
    }),
    reducers: {
        setMovies: moviesAdapter.setAll,
        updateMovie(state, {payload}) {
            moviesAdapter.updateOne(state, {
                id: payload.id,
                changes: payload.changes,
            });
        },
        addMovie(state, {payload}) {
            moviesAdapter.addOne(state, payload);
        },
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
        [fetchSearchTitle.pending]: (state) => {
            state.loading = true;
        },
        [fetchSearchTitle.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.type = payload;
        },

        [fetchMovieById.pending]: (state) => {
            state.loading = true;
        },
        [fetchMovieById.fulfilled]: (state) => {
            state.loading = false;
        },
    },
});

export const {setMovies, updateMovie, addMovie} = moviesSlice.actions;
export const moviesAdapterSelector = moviesAdapter;
export default moviesSlice.reducer;
