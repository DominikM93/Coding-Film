import React from "react";
import PropTypes from "prop-types";
import {StyledImg, StyledLink, StyledPaper} from "./styles";
import {Typography} from "@mui/material";

const SearchCard = ({data, type}) => {
    return (
        <StyledLink to={`/${type}/${data.id}`}>
            <StyledPaper elevation={2}>
                <StyledImg src={data.image} alt={data.title} />
                <Typography noWrap variant="h6">
                    {data.title}
                </Typography>
                <Typography noWrap variant="h6">
                    {`${data.description}`}
                </Typography>
            </StyledPaper>
        </StyledLink>
    );
};

SearchCard.propTypes = {
    data: PropTypes.object,
    type: PropTypes.string,
};

export default SearchCard;
