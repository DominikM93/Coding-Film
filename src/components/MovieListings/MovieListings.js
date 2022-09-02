import React from "react";
import PropTypes from "prop-types";
import {Grid, Stack, Typography} from "@mui/material";
import MovieList from "../MovieList/MovieList";

const MovieListings = ({movies, type}) => {
    return (
        <>
            {type}
            <Stack>
                <Grid container justifyContent="center">
                    <Grid item md={2}>
                        <Typography variant="h5">Rank</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5">Title</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="h5">IMDb Rating</Typography>
                    </Grid>
                </Grid>
                {movies.map((movie, index) => (
                    <MovieList key={movie.id} movie={movie} index={index} />
                ))}
            </Stack>
        </>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.array,
    type: PropTypes.string,
};

export default MovieListings;
