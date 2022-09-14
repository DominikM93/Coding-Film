import React from "react";
import {Menu, MenuItem} from "@mui/material";
import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";
import LanguageIcon from "@mui/icons-material/Language";
import {StyledIconButton} from "./styles";

const LanguagePicker = ({
    open,
    handleClick,
    handleClose,
    changeLocale,
    anchorEl,
}) => {
    return (
        <>
            <StyledIconButton variant="contained" onClick={handleClick}>
                <LanguageIcon />
            </StyledIconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={changeLocale} id="en-US">
                    <FormattedMessage id="english" defaultMessage="English" />
                </MenuItem>
                <MenuItem onClick={changeLocale} id="fr">
                    <FormattedMessage id="french" defaultMessage="French" />
                </MenuItem>
            </Menu>
        </>
    );
};

LanguagePicker.propTypes = {
    open: PropTypes.bool,
    anchorEl: PropTypes.object,
    handleClick: PropTypes.func,
    handleClose: PropTypes.func,
    changeLocale: PropTypes.func,
};

export default LanguagePicker;
