import {Stack} from "@mui/material";
import React from "react";
import {Grade, CalendarMonth, AccessTime} from "@mui/icons-material";
import PropTypes from "prop-types";
import {
    StyledTypography,
    StyledStack,
    StyledStack1,
    StyledActorLink,
} from "./styles";
import SlideshowContainer from "../Slideshow/SlideshowContainer";
import {FormattedMessage} from "react-intl";

const Movie = ({movie, actors}) => (
    <StyledStack direction="row">
        <StyledStack1>
            <StyledTypography variant="h3">{movie.fullTitle}</StyledTypography>
            <Stack direction="row">
                <StyledTypography variant="h6">
                    <Grade />
                    {movie.imDbRating}
                </StyledTypography>
                <StyledTypography variant="h6">
                    <CalendarMonth />
                    {movie.releaseDate}
                </StyledTypography>
                <StyledTypography variant="h6">
                    <AccessTime />
                    {movie.runtimeStr}
                </StyledTypography>
            </Stack>
            <StyledTypography variant="h6">{movie.plot}</StyledTypography>
            <StyledTypography variant="h5">
                <FormattedMessage id="directors" defaultMessage="Directors: " />
                {movie.directorList.map(({id, name}, index) => (
                    <StyledActorLink key={id} to={`/actor/${id}`}>
                        {index !== movie.directorList.length - 1
                            ? `${name},`
                            : name}
                    </StyledActorLink>
                ))}
            </StyledTypography>
            <StyledTypography variant="h5">
                <FormattedMessage id="actors" defaultMessage="Actors: " />
                {actors.map(({id, name}, index) => (
                    <StyledActorLink key={id} to={`/actor/${id}`}>
                        {index !== actors.length - 1 ? `${name},` : name}
                    </StyledActorLink>
                ))}
            </StyledTypography>
            <StyledTypography variant="h5">
                <FormattedMessage id="genres" defaultMessage="Genres: " />
                {movie.genres}
            </StyledTypography>
            <StyledTypography variant="h5">
                <FormattedMessage id="writers" defaultMessage="Writers: " />
                {movie.writerList.map(({id, name}, index) => (
                    <StyledActorLink key={id} to={`/actor/${id}`}>
                        {index !== movie.writerList.length - 1
                            ? `${name},`
                            : name}
                    </StyledActorLink>
                ))}
            </StyledTypography>
            <StyledTypography variant="h5">
                <FormattedMessage id="awards" defaultMessage="Awards: " />
                {movie.awards}
            </StyledTypography>
        </StyledStack1>
        <SlideshowContainer images={movie.images} />
    </StyledStack>
);

Movie.propTypes = {
    movie: PropTypes.object,
    actors: PropTypes.array,
};

export default Movie;
