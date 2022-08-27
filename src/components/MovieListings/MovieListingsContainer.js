import React, {useEffect} from "react";
import MovieListings from "./MovieListings";
import {fetchMovies} from "../../features/movies/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies, getLoadingMovies} from "../../features/movies/movieSlice";

const MovieListingsContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    const isLoading = useSelector(getLoadingMovies);
    const movies = useSelector(getAllMovies);

    return (
        <>
            {isLoading === null ? (
                "null"
            ) : isLoading ? (
                "Loading..."
            ) : (
                <MovieListings movies={movies} />
            )}
        </>
    );
};

export default MovieListingsContainer;
