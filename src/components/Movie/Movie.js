import {Box, Stack} from "@mui/material";
import React from "react";
import {Grade, CalendarMonth, AccessTime} from "@mui/icons-material";
import PropTypes from "prop-types";
import {
    StyledStack,
    StyledStackBottom,
    StyledActorLink,
    StyledTypographyPlot,
    StyledTypographyTop,
    StyledPaper,
    StyledTypographyTitle,
    StyledTypographyBottom,
} from "./styles";
import SlideshowContainer from "../Slideshow/SlideshowContainer";
import {FormattedMessage} from "react-intl";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Movie = ({movie, actors, loading = true, error}) => {
    if (loading && actors === undefined) return <Loading />;

    if (error !== null) return <Error error={error} />;

    if (!loading && actors !== undefined) {
        return (
            <StyledPaper>
                <StyledStack diraction="column">
                    <StyledTypographyTitle variant="h3">
                        {movie.fullTitle}
                    </StyledTypographyTitle>
                    <Stack direction="row">
                        <StyledTypographyTop variant="h6">
                            <Grade />
                            {movie.imDbRating}
                        </StyledTypographyTop>
                        <StyledTypographyTop variant="h6">
                            <CalendarMonth />
                            {movie.releaseDate}
                        </StyledTypographyTop>
                        <StyledTypographyTop variant="h6">
                            <AccessTime />
                            {movie.runtimeStr}
                        </StyledTypographyTop>
                    </Stack>
                    <Box>
                        <StyledTypographyPlot>
                            {movie.wikipedia.plotShort.plainText === ""
                                ? movie.plot
                                : movie.wikipedia.plotShort.plainText}
                        </StyledTypographyPlot>
                    </Box>

                    <StyledStackBottom>
                        <Box>
                            <StyledTypographyBottom>
                                <FormattedMessage
                                    id="directors"
                                    defaultMessage="Directors: "
                                />
                                {movie.directorList.map(({id, name}, index) => (
                                    <StyledActorLink
                                        key={id}
                                        to={`/actor/${id}`}>
                                        {index !== movie.directorList.length - 1
                                            ? `${name},`
                                            : name}
                                    </StyledActorLink>
                                ))}
                            </StyledTypographyBottom>
                            <StyledTypographyBottom>
                                <FormattedMessage
                                    id="actors"
                                    defaultMessage="Actors: "
                                />
                                {actors.map(({id, name}, index) => (
                                    <StyledActorLink
                                        key={id}
                                        to={`/actor/${id}`}>
                                        {index !== actors.length - 1
                                            ? `${name},`
                                            : name}
                                    </StyledActorLink>
                                ))}
                            </StyledTypographyBottom>
                            <StyledTypographyBottom>
                                <FormattedMessage
                                    id="genres"
                                    defaultMessage="Genres: "
                                />
                                {movie.genres}
                            </StyledTypographyBottom>
                            <StyledTypographyBottom>
                                <FormattedMessage
                                    id="writers"
                                    defaultMessage="Writers: "
                                />
                                {movie.writerList.map(({id, name}, index) => (
                                    <StyledActorLink
                                        key={id}
                                        to={`/actor/${id}`}>
                                        {index !== movie.writerList.length - 1
                                            ? `${name},`
                                            : name}
                                    </StyledActorLink>
                                ))}
                            </StyledTypographyBottom>
                            <StyledTypographyBottom>
                                <FormattedMessage
                                    id="awards"
                                    defaultMessage="Awards: "
                                />
                                {movie.awards}
                            </StyledTypographyBottom>
                        </Box>
                        <SlideshowContainer images={movie.images} />
                    </StyledStackBottom>
                </StyledStack>
            </StyledPaper>
        );
    }
};

Movie.propTypes = {
    movie: PropTypes.object,
    actors: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
};

export default Movie;
