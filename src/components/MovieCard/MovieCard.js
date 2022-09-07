import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@mui/material";
import {StyledLink, StyledImg, StyledPaper, StyledGrade} from "./styles";

const MovieCard = ({movie, type}) => {
    return (
        <>
            {type === "Search" ? (
                <StyledLink to={`/movie/${movie.id}`}>
                    <StyledPaper elevation={2}>
                        <StyledImg src={movie.image} alt={movie.title} />
                        <Typography variant="h6">{movie.title}</Typography>
                        <Typography variant="h6">{`${movie.description}`}</Typography>
                    </StyledPaper>
                </StyledLink>
            ) : (
                <StyledLink to={`/movie/${movie.id}`}>
                    <StyledPaper elevation={2}>
                        <StyledImg src={movie.image} alt={movie.title} />
                        <Typography variant="h6">{`${movie.title} (${movie.year})`}</Typography>

                        <Typography variant="h6">{`Rank: ${movie.rank} ${
                            movie.rankUpDown === undefined
                                ? ""
                                : `(${movie.rankUpDown})`
                        }`}</Typography>
                        <Typography variant="h6">
                            <StyledGrade />
                            {movie.imDbRating}
                        </Typography>
                    </StyledPaper>
                </StyledLink>
            )}
        </>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    type: PropTypes.string,
};

export default MovieCard;
