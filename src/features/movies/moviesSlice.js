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
        return "In Theaters";
    }
);

export const fetchMovieById = createAsyncThunk(
    "movies/fetchMovieById",
    async ({id, allIds}, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_APIKey}/${id}/Images,Trailer`
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

        if (type === "Top 250 Movies") {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Top 250 Movies";
        } else if (type === "Top 250 Shows") {
            const data = await fetch(
                `https://imdb-api.com/en/API/Top250TVs/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Top 250 Shows";
        } else if (type === "Most Popular Movies") {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Most Popular Movies";
        } else if (type === "Most Popular Shows") {
            const data = await fetch(
                `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_APIKey}`
            ).then((res) => res.json());
            dispatch(setMovies(data.items));
            fullType = "Most Popular Shows";
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
        [fetchSearchTitle.fulfilled]: (state) => {
            state.loading = false;
        },

        [fetchMovieById.pending]: (state) => {
            state.loading = true;
        },
        [fetchMovieById.fulfilled]: (state) => {
            state.loading = false;
        },
    },
});

export const getLoadingMovies = (state) => state.movies.loading;
export const getType = (state) => state.movies.type;

export const {setMovies, updateMovie, addMovie} = moviesSlice.actions;
export const moviesSelectors = moviesAdapter.getSelectors(
    (state) => state.movies
);
export default moviesSlice.reducer;
