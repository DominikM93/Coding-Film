import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieCardContainer = ({movie}) => {
    return <MovieCard movie={movie} />;
};

MovieCardContainer.propTypes = {
    movie: PropTypes.object,
};

export default MovieCardContainer;
