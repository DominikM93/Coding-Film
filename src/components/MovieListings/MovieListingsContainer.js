import React, {useEffect} from "react";
import MovieListings from "./MovieListings";
import {
    fetchPopularMovies,
    moviesSelectors,
    getLoadingMovies,
    getType,
} from "../../features/movies/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

const MovieListingsContainer = () => {
    const dispatch = useDispatch();

    const allIds = useSelector(moviesSelectors.selectIds);
    const allEntities = useSelector(moviesSelectors.selectEntities);
    const loading = useSelector(getLoadingMovies);
    const type = useSelector(getType);

    const denormlizeData = (ids, entities) => {
        if (ids !== undefined) {
            const data = ids.map((id) => entities[id]);

            return data;
        }
    };

    useEffect(() => {
        if (allIds.length === 0) {
            dispatch(fetchPopularMovies());
        }
    }, []);

    const movies = denormlizeData(allIds, allEntities);

    return (
        <>
            {loading === null ? (
                "null"
            ) : loading ? (
                "Loading..."
            ) : (
                <MovieListings movies={movies} />
            )}
        </>
    );
};

export default MovieListingsContainer;
