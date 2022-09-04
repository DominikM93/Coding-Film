import React from "react";
import PropTypes from "prop-types";

const Actor = ({actor}) => {
    return (
        <>
            <div>{actor.name}</div>
            <div>Role: {actor.role}</div>
            <div>Date of Birth: {actor.birthDate}</div>
            {actor.deathDate !== null
                ? `Date of Death: ${actor.deathDate}`
                : ""}
            <div>Awards: {actor.awards}</div>
            <div>Summary: {actor.summary}</div>
            <div>Height: {actor.height}</div>
            <div>
                Known For:
                {actor.knownFor.map(({id, title}, index) => (
                    <span key={id}>
                        {index !== actor.knownFor.length - 1
                            ? `${title}, `
                            : title}
                    </span>
                ))}
            </div>
            <div>
                <img
                    style={{height: "300px"}}
                    src={actor.image}
                    alt={actor.name}
                />
            </div>
        </>
    );
};

Actor.propTypes = {
    actor: PropTypes.object,
};

export default Actor;
