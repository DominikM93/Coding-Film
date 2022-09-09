import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";

const MovieListings = ({movies, type}) => (
    <>
        {type}
        <Grid container justifyContent="space-evenly">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type={type} />
            ))}
        </Grid>
    </>
);

MovieListings.propTypes = {
    movies: PropTypes.array,
    type: PropTypes.string,
};

export default MovieListings;
