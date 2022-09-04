import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import movieReducer from "./movie/movieSlice";
import actorReducer from "./actor/actorSlice";

export const store = configureStore({
    reducer: {movies: moviesReducer, movie: movieReducer, actor: actorReducer},
});
