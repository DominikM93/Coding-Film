import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useFetchDataRedux} from "../../Hooks/useFetchData";

const APIKey = "k_2gbajiv1";

const initialState = {
    movies: {},
    movie: {},
    loadingMovies: null,
    loadingMovie: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const data = useFetchDataRedux(
        `https://imdb-api.com/en/API/MostPopularMovies/${APIKey}`
    );
    return data;
});

export const fetchMovieById = createAsyncThunk(
    "movies/fetchMovieById",
    async (id) => {
        const data = useFetchDataRedux(
            `https://imdb-api.com/en/API/Title/${APIKey}/${id}/Images,Trailer`
        );
        return data;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            return {...state, loadingMovies: true};
        },
        [fetchMovies.fulfilled]: (state, {payload}) => {
            return {...state, movies: payload, loadingMovies: false};
        },
        [fetchMovies.rejected]: (state) => {
            return {...state, loadingMovies: true};
        },
        [fetchMovieById.pending]: (state) => {
            return {...state, loadingMovie: true};
        },
        [fetchMovieById.fulfilled]: (state, {payload}) => {
            return {...state, movie: payload, loadingMovie: false};
        },
        [fetchMovieById.rejected]: (state) => {
            return {...state, loadingMovie: true};
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;
export const getMovieById = (state) => state.movies.movie;
export const getLoadingMovies = (state) => state.movies.loadingMovies;
export const getLoadingMovie = (state) => state.movies.loadingMovie;
export default movieSlice.reducer;
