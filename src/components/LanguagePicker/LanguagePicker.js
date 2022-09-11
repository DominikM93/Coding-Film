import React from "react";
import {Button, Menu, MenuItem} from "@mui/material";
import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";

const LanguagePicker = ({
    open,
    handleClick,
    handleClose,
    changeLocale,
    anchorEl,
}) => {
    return (
        <>
            <Button variant="contained" onClick={handleClick}>
                <FormattedMessage id="language" defaultMessage="Languages" />
            </Button>
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
