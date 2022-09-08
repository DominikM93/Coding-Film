import React from "react";
import PropTypes from "prop-types";
import {MenuItem, Select} from "@mui/material";
import {StyledSearch} from "./styles";

function SearchBar({onChangeType, onSearch, searchTerm, setSearchTerm}) {
    return (
        <>
            <Select
                id="demo-simple-select"
                label="Age"
                defaultValue="Titles"
                onChange={(e) => onChangeType(e)}>
                <MenuItem value={"Titles"}>Titles</MenuItem>
                <MenuItem value={"Celebs"}>Celebs</MenuItem>
            </Select>
            <StyledSearch
                placeholder="Search Movie or Show"
                variant="filled"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={onSearch}
                value={searchTerm}
            />
        </>
    );
}

SearchBar.propTypes = {
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
    onSearch: PropTypes.func,
    onChangeType: PropTypes.func,
};

export default SearchBar;
