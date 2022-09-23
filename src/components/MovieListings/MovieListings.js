import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
import {StyledPaper, StyledTypography} from "./styles";
import {FormattedMessage} from "react-intl";

const MovieListings = ({movies, type}) => {
    return (
        <>
            <StyledPaper elevation={3}>
                <StyledTypography>
                    <FormattedMessage id={type} />
                </StyledTypography>
            </StyledPaper>
            <Grid container justifyContent="space-evenly">
                {movies.map((movie) => (
                    <MovieCardContainer key={movie.id} movie={movie} />
                ))}
            </Grid>
        </>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.array,
    type: PropTypes.string,
};

export default MovieListings;
