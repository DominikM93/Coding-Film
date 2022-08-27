import React from "react";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";

const MovieListings = ({movies}) => {
    return (
        <Grid container justifyContent="space-evenly" alignItems="center">
            {movies.items.map((movie) => (
                <MovieCardContainer key={movie.id} movie={movie} />
            ))}
        </Grid>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.object,
};

export default MovieListings;
