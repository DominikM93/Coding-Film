import React from "react";
import PropTypes from "prop-types";
import {Box, Stack, Typography} from "@mui/material";
import {StyledLink} from "./styles";
import {moviesSelectors} from "../../features/movies/moviesSlice";
import {useSelector} from "react-redux";

const Actor = ({actor, handleOnClick}) => {
    const allIds = useSelector(moviesSelectors.selectIds);
    return (
        <Box>
            <Stack direction="row">
                <Stack>
                    <Typography variant="h4">{actor.name}</Typography>
                    <Typography variant="h6">Roles: {actor.role}</Typography>
                    <Typography variant="h6">
                        Date of Birth: {actor.birthDate}
                    </Typography>
                    <Typography variant="h6">
                        {actor.deathDate !== null
                            ? `Date of Death: ${actor.deathDate}`
                            : ""}
                    </Typography>
                    <Typography variant="h6">Awards: {actor.awards}</Typography>
                    <Typography variant="h6">
                        Summary: {actor.summary}
                    </Typography>
                    <Typography variant="h6">Height: {actor.height}</Typography>
                    <Typography variant="h6">
                        Known For:
                        {actor.knownFor.map(({id, title}, index) => (
                            <StyledLink
                                to={`/movie/${id}`}
                                key={id}
                                onClick={() => handleOnClick(id, allIds)}>
                                {index !== actor.knownFor.length - 1
                                    ? `${title}, `
                                    : title}
                            </StyledLink>
                        ))}
                    </Typography>
                </Stack>
                <Stack>
                    <img
                        style={{height: "300px"}}
                        src={actor.image}
                        alt={actor.name}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

Actor.propTypes = {
    actor: PropTypes.object,
    handleOnClick: PropTypes.func,
};

export default Actor;
