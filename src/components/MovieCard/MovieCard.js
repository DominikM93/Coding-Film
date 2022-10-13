import React from "react";
import PropTypes from "prop-types";
import {Box, Stack, Typography} from "@mui/material";
import {
    StyledLink,
    StyledImg,
    StyledPaper,
    StyledGrade,
    StyledStack,
    StyledTypographyUp,
    StyledTypographyDown,
} from "./styles";
import {useAppSelector} from "../../utils/hooks";
import {moviesSelectors} from "../../features/selectors/moviesSelectors";
import {FormattedMessage} from "react-intl";

const MovieCard = ({movie, handleOnClick}) => {
    const allIds = useAppSelector(moviesSelectors.selectIds);
    return (
        <StyledLink
            to={`/movie/${movie.id}`}
            onClick={() => handleOnClick(movie.id, allIds)}>
            <StyledPaper elevation={2}>
                <StyledStack justifyContent="space-between">
                    <StyledImg src={movie.image} alt={movie.title} />
                    <Box>
                        <Typography noWrap={true} variant="h6">
                            {movie.fullTitle}
                        </Typography>

                        {!!movie.rank && (
                            <Stack direction="row">
                                <Typography variant="h6">{`Rank: ${movie.rank} `}</Typography>

                                {!!movie.rankUpDown &&
                                    (movie.rankUpDown.includes("-") ? (
                                        <StyledTypographyDown variant="h6">
                                            {`(${movie.rankUpDown})`}
                                        </StyledTypographyDown>
                                    ) : (
                                        <StyledTypographyUp variant="h6">
                                            {`(${movie.rankUpDown})`}
                                        </StyledTypographyUp>
                                    ))}
                            </Stack>
                        )}

                        <Typography variant="h6">
                            <FormattedMessage
                                id="rating"
                                defaultMessage="IMDb Rating: "
                            />
                            <StyledGrade />
                            {movie.imDbRating}
                        </Typography>
                    </Box>
                </StyledStack>
            </StyledPaper>
        </StyledLink>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    handleOnClick: PropTypes.func,
};

export default MovieCard;
