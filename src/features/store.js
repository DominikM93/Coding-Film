import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import movieReducer from "./movie/movieSlice";

export const store = configureStore({
    reducer: {movies: moviesReducer, movie: movieReducer},
});
