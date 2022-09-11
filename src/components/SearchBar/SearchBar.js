import React from "react";
import PropTypes from "prop-types";
import {MenuItem, Select} from "@mui/material";
import {StyledSearch} from "./styles";
import {FormattedMessage, useIntl} from "react-intl";

const SearchBar = ({onChangeType, onSearch, searchTerm, setSearchTerm}) => {
    const intl = useIntl();
    return (
        <>
            <Select defaultValue="Titles" onChange={(e) => onChangeType(e)}>
                <MenuItem value={"Titles"}>
                    <FormattedMessage id="titles" defaultMessage="Titles" />
                </MenuItem>
                <MenuItem value={"Celebs"}>
                    <FormattedMessage id="celebs" defaultMessage="Celebs" />
                </MenuItem>
            </Select>
            <StyledSearch
                placeholder={intl.formatMessage({
                    id: "search",
                    defaultMessage: "Search",
                })}
                variant="filled"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={onSearch}
                value={searchTerm}
            />
        </>
    );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
    onSearch: PropTypes.func,
    onChangeType: PropTypes.func,
};

export default SearchBar;
