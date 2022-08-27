import {Stack} from "@mui/material";
import React from "react";
import {Grade, CalendarMonth, AccessTime} from "@mui/icons-material";
import PropTypes from "prop-types";
import {StyledTypography, StyledStack, StyledStack1} from "./styles";

const Movie = ({movie}) => {
    return (
        <>
            <StyledStack direction="row">
                <StyledStack1>
                    <StyledTypography variant="h3">
                        {movie.fullTitle}
                    </StyledTypography>
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
                    <StyledTypography variant="h6">
                        {movie.plot}
                    </StyledTypography>
                    <StyledTypography variant="h5">
                        Directors: {movie.directors}
                    </StyledTypography>
                    <StyledTypography variant="h5">
                        Actors: {movie.stars}
                    </StyledTypography>
                    <StyledTypography variant="h5">
                        Genres: {movie.genres}
                    </StyledTypography>
                    <StyledTypography variant="h5">
                        Writers: {movie.writers}
                    </StyledTypography>
                    <StyledTypography variant="h5">
                        Awards: {movie.awards}
                    </StyledTypography>
                    <iframe
                        height="450"
                        width="855"
                        src={movie.trailer.linkEmbed}></iframe>
                </StyledStack1>
                <img style={{height: "700px"}} src={movie.image} alt="" />
            </StyledStack>
        </>
    );
};

Movie.propTypes = {
    movie: PropTypes.object,
};

export default Movie;
