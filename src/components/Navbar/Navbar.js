import React from "react";
import {
    AppBar,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import {
    StyledLink,
    StyledNavLink,
    StyledStack,
    StyledMenuIcon,
    StyledGridContainer,
    StyledGridContainerMobile,
} from "./styles";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchInTheaters} from "../../features/movies/moviesSlice";
import PropTypes from "prop-types";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import {FormattedMessage} from "react-intl";
import LanguagePickerContainer from "../LanguagePicker/LanguagePickerContainer";
import MobileDrawerContainer from "../MobileDrawer/MobileDrawerContainer";
import {getMoviesData} from "../../features/selectors/moviesSelectors";

const Navbar = ({
    open,
    handleClick,
    handleClose,
    anchorEl,
    changeMoviesType,
}) => {
    const dispatch = useAppDispatch();
    const moviesData = useAppSelector(getMoviesData);

    return (
        <AppBar position="static" color="primary">
            <StyledGridContainer container>
                <Grid item sm={2} md={2} xl={2}>
                    <StyledLink to="/">
                        <Typography
                            variant="h6"
                            onClick={() => {
                                if (moviesData.type !== "theaters")
                                    dispatch(fetchInTheaters());
                            }}>
                            Coding Film
                        </Typography>
                    </StyledLink>
                </Grid>
                <Grid item sm={8} md={8} xl={8}>
                    <StyledStack direction="row">
                        <IconButton onClick={handleClick}>
                            <StyledMenuIcon color="primary" />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem
                                onClick={() => changeMoviesType(2)}
                                disabled={moviesData.type === "Top 250 Movies"}>
                                <StyledNavLink to="/">
                                    <FormattedMessage
                                        id="topMovies"
                                        defaultMessage="Top 250 Movies"
                                    />
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem
                                onClick={() => changeMoviesType(3)}
                                disabled={moviesData.type === "Top 250 Shows"}>
                                <StyledNavLink to="/">
                                    <FormattedMessage
                                        id="topShows"
                                        defaultMessage="Top 250 Shows"
                                    />
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem
                                onClick={() => changeMoviesType(4)}
                                disabled={
                                    moviesData.type === "Most Popular Movies"
                                }>
                                <StyledNavLink to="/">
                                    <FormattedMessage
                                        id="popularMovies"
                                        defaultMessage="Most Popular Movies"
                                    />
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem
                                onClick={() => changeMoviesType(5)}
                                disabled={
                                    moviesData.type === "Most Popular Shows"
                                }>
                                <StyledNavLink to="/">
                                    <FormattedMessage
                                        id="popularShows"
                                        defaultMessage="Most Popular Shows"
                                    />
                                </StyledNavLink>
                            </MenuItem>
                        </Menu>
                        <SearchBarContainer />
                    </StyledStack>
                </Grid>
                <Grid item sm={1} md={1} xl={1}>
                    <LanguagePickerContainer />
                </Grid>
            </StyledGridContainer>
            <StyledGridContainerMobile container>
                <StyledStack direction="row">
                    <MobileDrawerContainer
                        changeMoviesType={changeMoviesType}
                    />
                    <SearchBarContainer />
                    <LanguagePickerContainer />
                </StyledStack>
            </StyledGridContainerMobile>
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
