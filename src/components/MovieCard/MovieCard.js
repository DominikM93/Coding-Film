import {Box, Typography} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {StyledImg, StyledLink} from "./styles";

const MovieCard = ({movie}) => {
    return (
        <Box>
            <StyledLink to={`/movie/${movie.id}`}>
                <StyledImg src={movie.image} alt={movie.title} />
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="h6">{movie.year}</Typography>
            </StyledLink>
        </Box>
    );
};
MovieCard.propTypes = {
    movie: PropTypes.object,
};
export default MovieCard;
