import React from "react";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";

const MovieListings = ({movies}) => {
    const arr = movies.items.slice(0, 20);
    return (
        <Grid container justifyContent="space-evenly" alignItems="center">
            {arr.map((movie) => (
                <MovieCardContainer key={movie.id} movie={movie} />
            ))}
        </Grid>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.object,
};

export default MovieListings;
