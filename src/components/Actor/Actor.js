import React from "react";
import PropTypes from "prop-types";
import {Box} from "@mui/material";
import {
    StyledLink,
    StyledTypographyName,
    StyledTypographyBody,
    StyledStack,
    StyledImg,
    StyledPaper,
} from "./styles";
import {moviesSelectors} from "../../features/selectors/moviesSelectors";
import {useAppSelector} from "../../utils/hooks";
import {FormattedMessage} from "react-intl";
import Loading from "../Loading/Loading";

const Actor = ({actor, handleOnClick, loading}) => {
    const allIds = useAppSelector(moviesSelectors.selectIds);

    return (
        <>
            {!loading ? (
                <StyledPaper>
                    <StyledStack>
                        <Box>
                            <StyledTypographyName>
                                {actor.name}
                            </StyledTypographyName>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="roles"
                                    defaultMessage="Roles: "
                                />
                                {actor.role}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="dob"
                                    defaultMessage=" Date of Birth:"
                                />
                                {actor.birthDate}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                {actor.deathDate !== null ? (
                                    <>
                                        <FormattedMessage
                                            id="dod"
                                            defaultMessage="Date of Death: "
                                        />
                                        {actor.deathDate}
                                    </>
                                ) : (
                                    ""
                                )}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="awards"
                                    defaultMessage="Awards: "
                                />
                                {actor.awards}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="summary"
                                    defaultMessage="Summary: "
                                />
                                {actor.summary}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="height"
                                    defaultMessage="Height: "
                                />
                                {actor.height}
                            </StyledTypographyBody>
                            <StyledTypographyBody>
                                <FormattedMessage
                                    id="knownFor"
                                    defaultMessage="Known For: "
                                />

                                {actor.knownFor.map(({id, title}, index) => (
                                    <StyledLink
                                        to={`/movie/${id}`}
                                        key={id}
                                        onClick={() =>
                                            handleOnClick(id, allIds)
                                        }>
                                        {index !== actor.knownFor.length - 1
                                            ? `${title}, `
                                            : title}
                                    </StyledLink>
                                ))}
                            </StyledTypographyBody>
                        </Box>

                        <StyledImg src={actor.image} alt={actor.name} />
                    </StyledStack>
                </StyledPaper>
            ) : (
                <Loading />
            )}
        </>
    );
};

Actor.propTypes = {
    actor: PropTypes.object,
    handleOnClick: PropTypes.func,
    loading: PropTypes.bool,
};

export default Actor;
