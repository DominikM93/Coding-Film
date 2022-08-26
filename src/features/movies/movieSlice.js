import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useFetchDataRedux} from "../../Hooks/useFetchData";

const APIKey = "k_2gbajiv1";

const initialState = {
    movies: {},
    isLoading: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    /*  const {data} = useFetchData(
            `https://imdb-api.com/en/API/MostPopularMovies/${APIKey}`
        ); */
    const data = useFetchDataRedux(
        `https://imdb-api.com/en/API/MostPopularMovies/${APIKey}`
    );
    return data;
});

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            return {...state, isLoading: true};
        },
        [fetchMovies.fulfilled]: (state, {payload}) => {
            return {...state, movies: payload, isLoading: false};
        },
        [fetchMovies.rejected]: (state) => {
            return {...state, isLoading: true};
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;
export const getIsLoading = (state) => state.movies.isLoading;
export default movieSlice.reducer;
