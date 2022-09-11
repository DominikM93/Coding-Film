import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import actorReducer from "./actor/actorSlice";
import actorsReducer from "./actors/actorsSlice";
import languageReducer from "./language/languageSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        actors: actorsReducer,
        actor: actorReducer,
        language: languageReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});
