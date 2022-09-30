import {moviesAdapterSelector} from "../movies/moviesSlice";

export const getMoviesData = (state) => state.movies;

export const getDenormlizeMovies = ({movies: {ids, entities}}) => {
    if (ids !== undefined) {
        const data = ids.map((id) => entities[id]);
        return data;
    }
};

export const moviesSelectors = moviesAdapterSelector.getSelectors(
    (state) => state.movies
);
