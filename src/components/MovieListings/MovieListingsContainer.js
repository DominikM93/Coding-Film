import React, {useEffect} from "react";
import MovieListings from "./MovieListings";
import {fetchInTheaters} from "../../features/movies/moviesSlice";
import {
    getMoviesData,
    getDenormlizeMovies,
} from "../../features/selectors/moviesSelectors";

import {useAppDispatch, useAppSelector} from "../../utils/hooks";

const MovieListingsContainer = () => {
    const dispatch = useAppDispatch();
    const {ids, loading, type} = useAppSelector(getMoviesData);
    const movies = useAppSelector(getDenormlizeMovies);

    useEffect(() => {
        if (ids.length === 0) {
            dispatch(fetchInTheaters());
        }
    }, []);

    return (
        <>
            <MovieListings movies={movies} type={type} loading={loading} />
        </>
    );
};

export default MovieListingsContainer;
