import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
const MovieListings = ({movies, type}) => (
    <>
        {type}
        <Grid container justifyContent="space-evenly">
            {movies.map((movie) => (
                <MovieCardContainer key={movie.id} movie={movie} />
            ))}
        </Grid>
    </>
);

MovieListings.propTypes = {
    movies: PropTypes.array,
    type: PropTypes.string,
};

export default MovieListings;
