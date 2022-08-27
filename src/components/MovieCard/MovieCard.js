import {Box, Typography} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {StyledImg} from "./styles";

const MovieCard = ({movie}) => {
    return (
        <Box>
            <StyledImg src={movie.image} alt={movie.title} />
            <Typography variant="h6">{movie.title}</Typography>
            <Typography variant="h6">{movie.year}</Typography>
        </Box>
    );
};
MovieCard.propTypes = {
    movie: PropTypes.object,
};
export default MovieCard;
