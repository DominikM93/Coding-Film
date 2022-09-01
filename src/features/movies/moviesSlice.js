import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

const APIKey = "k_2gbajiv1";

export const fetchPopularMovies = createAsyncThunk(
    "movies/fetchPopularMovies",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/MostPopularMovies/${APIKey}`
        ).then((res) => res.json());
        dispatch(setMovies(data.items));
    }
);

export const fetchPopularShows = createAsyncThunk(
    "movies/fetchPopularShows",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/MostPopularTVs/${APIKey}`
        ).then((res) => res.json());
        dispatch(setMovies(data.items));
    }
);

export const fetchTopMovies = createAsyncThunk(
    "movies/fetchTopMovies",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Top250Movies/${APIKey}`
        ).then((res) => res.json());
        dispatch(setMovies(data.items));
    }
);

export const fetchTopShows = createAsyncThunk(
    "movies/fetchTopShows",
    async (_, {dispatch}) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Top250TVs/${APIKey}`
        ).then((res) => res.json());
        dispatch(setMovies(data.items));
    }
);

const moviesAdapter = createEntityAdapter({
    selectId: (movie) => movie.id,
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: moviesAdapter.getInitialState({
        loadingMovies: null,
        type: "Most Popular Movies",
    }),
    reducers: {
        setMovies: moviesAdapter.setAll,
    },
    extraReducers: {
        [fetchPopularMovies.pending]: (state) => {
            state.loadingMovies = true;
        },
        [fetchPopularMovies.fulfilled]: (state) => {
            state.loadingMovies = false;
        },
    },
});

export const getLoadingMovies = (state) => state.movies.loadingMovies;
export const getType = (state) => state.movies.type;

export const {setMovies} = moviesSlice.actions;
export const moviesSelectors = moviesAdapter.getSelectors(
    (state) => state.movies
);
export default moviesSlice.reducer;
