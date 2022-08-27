import React, {useEffect} from "react";
import Movie from "./Movie";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMovieById,
    getMovieById,
    getLoadingMovie,
} from "../../features/movies/movieSlice";

const MovieContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, []);

    const isLoading = useSelector(getLoadingMovie);
    const movie = useSelector(getMovieById);

    return (
        <>
            {isLoading === null ? (
                "null"
            ) : isLoading ? (
                "Loading..."
            ) : (
                <Movie isLoading={isLoading} movie={movie} />
            )}
        </>
    );
};

export default MovieContainer;
