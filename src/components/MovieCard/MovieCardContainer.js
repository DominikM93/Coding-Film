import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import {useDispatch} from "react-redux";
import {fetchMovieById} from "../../features/movies/moviesSlice";

const MovieCardContainer = ({movie}) => {
    const dispatch = useDispatch();

    const handleOnClick = (id, allIds) => {
        dispatch(fetchMovieById({id, allIds}));
    };

    return <MovieCard movie={movie} handleOnClick={handleOnClick} />;
};

MovieCardContainer.propTypes = {
    movie: PropTypes.object,
};

export default MovieCardContainer;
