import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
import {StyledPaper, StyledTypography} from "./styles";
import {FormattedMessage} from "react-intl";
import Loading from "../Loading/Loading";

const MovieListings = ({movies, type, loading}) => {
    return (
        <>
            {!loading ? (
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
            ) : (
                <Loading />
            )}
        </>
    );
};

MovieListings.propTypes = {
    movies: PropTypes.array,
    type: PropTypes.string,
    loading: PropTypes.bool,
};

export default MovieListings;
