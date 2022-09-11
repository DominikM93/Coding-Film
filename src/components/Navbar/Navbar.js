import React from "react";
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import {StyledLink, StyledNavLink} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchInTheaters, getType} from "../../features/movies/moviesSlice";
import PropTypes from "prop-types";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import {FormattedMessage} from "react-intl";
import LanguagePickerContainer from "../LanguagePicker/LanguagePickerContainer";

const Navbar = ({
    open,
    handleClick,
    handleClose,
    anchorEl,
    changeMoviesType,
}) => {
    const dispatch = useDispatch();
    const type = useSelector(getType);
    return (
        <AppBar position="static">
            <Grid container sx={{alignItems: "center"}}>
                <Grid item md={1}></Grid>
                <Grid item md={1}>
                    <StyledLink to="/">
                        <Typography
                            variant="h6"
                            onClick={() => {
                                if (type !== "In Theaters")
                                    dispatch(fetchInTheaters());
                            }}>
                            Coding Film
                        </Typography>
                    </StyledLink>
                </Grid>
                <Grid item md={1}>
                    <Button variant="contained" onClick={handleClick}>
                        <FormattedMessage id="menu" defaultMessage="Menu" />
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem
                            onClick={changeMoviesType}
                            disabled={type === "Top 250 Movies"}>
                            <StyledNavLink to="/">
                                <FormattedMessage
                                    id="topMovies"
                                    defaultMessage="Top 250 Movies"
                                />
                            </StyledNavLink>
                        </MenuItem>
                        <MenuItem
                            onClick={changeMoviesType}
                            disabled={type === "Top 250 Shows"}>
                            <StyledNavLink to="/">
                                <FormattedMessage
                                    id="topShows"
                                    defaultMessage="Top 250 Shows"
                                />
                            </StyledNavLink>
                        </MenuItem>
                        <MenuItem
                            onClick={changeMoviesType}
                            disabled={type === "Most Popular Movies"}>
                            <StyledNavLink to="/">
                                <FormattedMessage
                                    id="popularMovies"
                                    defaultMessage="Most Popular Movies"
                                />
                            </StyledNavLink>
                        </MenuItem>
                        <MenuItem
                            onClick={changeMoviesType}
                            disabled={type === "Most Popular Shows"}>
                            <StyledNavLink to="/">
                                <FormattedMessage
                                    id="popularShows"
                                    defaultMessage="Most Popular Shows"
                                />
                            </StyledNavLink>
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item md={7}>
                    <SearchBarContainer />
                </Grid>
                <Grid item md={1}>
                    <LanguagePickerContainer />
                </Grid>
            </Grid>
        </AppBar>
    );
};

Navbar.propTypes = {
    open: PropTypes.bool,
    handleClick: PropTypes.func,
    handleClose: PropTypes.func,
    changeMoviesType: PropTypes.func,
    anchorEl: PropTypes.object,
};

export default Navbar;
