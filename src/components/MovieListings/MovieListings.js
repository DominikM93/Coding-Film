import React from "react";
import PropTypes from "prop-types";
import {Grid, Stack} from "@mui/material";
import MovieList from "../MovieCard/MovieList";

const MovieListings = ({movies}) => {
    return (
        <>
            <Stack>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item md={8}>
                        Rank and Title
                    </Grid>
                    <Grid item md={2}>
                        IMDb Rating
                    </Grid>
                </Grid>
                {movies.items.map((movie, index) => (
                    <MovieList key={movie.id} movie={movie} index={index} />
                ))}
            </Stack>
        </>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.object,
};

export default MovieListings;
