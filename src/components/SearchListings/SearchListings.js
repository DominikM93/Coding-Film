import React from "react";
import PropTypes from "prop-types";
import SearchCard from "../SearchCard/SearchCard";
import {Grid} from "@mui/material";

const SearchListings = ({dataSet, type}) => {
    return (
        <Grid container justifyContent="space-evenly">
            {dataSet.map((data) => (
                <SearchCard key={data.id} data={data} type={type} />
            ))}
        </Grid>
    );
};

SearchListings.propTypes = {dataSet: PropTypes.array, type: PropTypes.string};

export default SearchListings;
