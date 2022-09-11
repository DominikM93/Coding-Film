import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@mui/material";
import {StyledLink, StyledImg, StyledPaper, StyledGrade} from "./styles";
import {useSelector} from "react-redux";
import {moviesSelectors} from "../../features/movies/moviesSlice";

const MovieCard = ({movie, handleOnClick}) => {
    const allIds = useSelector(moviesSelectors.selectIds);
    return (
        <StyledLink
            to={`/movie/${movie.id}`}
            onClick={() => handleOnClick(movie.id, allIds)}>
            <StyledPaper elevation={2}>
                <StyledImg src={movie.image} alt={movie.title} />
                <Typography variant="h6">{`${movie.title} (${movie.year})`}</Typography>

                {movie.rank === undefined ? (
                    ""
                ) : (
                    <Typography variant="h6">{`Rank: ${movie.rank} ${
                        movie.rankUpDown === undefined
                            ? ""
                            : `(${movie.rankUpDown})`
                    }`}</Typography>
                )}

                <Typography variant="h6">
                    <StyledGrade />
                    {movie.imDbRating}
                </Typography>
            </StyledPaper>
        </StyledLink>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    handleOnClick: PropTypes.func,
};

export default MovieCard;
