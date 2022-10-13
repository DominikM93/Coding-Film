import React from "react";
import SearchCard from "../SearchCard/SearchCard";
import {Grid} from "@mui/material";
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";

const SearchListings = ({listData, type, loading}) => {
    return loading ? (
        <Loading />
    ) : (
        <Grid container justifyContent="space-evenly">
            {listData.map((data) => (
                <SearchCard key={data.id} data={data} type={type} />
            ))}
        </Grid>
    );
};

SearchListings.propTypes = {
    listData: PropTypes.array,
    type: PropTypes.string,
    loading: PropTypes.bool,
};

export default SearchListings;
