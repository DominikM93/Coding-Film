import React, {useEffect} from "react";
import MovieListings from "./MovieListings";
import {fetchMovies} from "../../features/movies/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies, getIsLoading} from "../../features/movies/movieSlice";

const MovieListingsContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const isLoading = useSelector(getIsLoading);
    const movies = useSelector(getAllMovies);

    return <MovieListings isLoading={isLoading} movies={movies} />;
};

export default MovieListingsContainer;
