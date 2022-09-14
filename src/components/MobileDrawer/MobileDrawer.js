import {Drawer, IconButton} from "@mui/material";
import React from "react";
import {
    StyledMenuIcon,
    StyledNavLink,
    StyledMenuItem,
    StyledTypography,
} from "./styles";
import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import {getType, fetchInTheaters} from "../../features/movies/moviesSlice";

const MobileDrawer = ({toggleDrawer, mobileOpen, changeMoviesType}) => {
    const type = useSelector(getType);
    const dispatch = useDispatch();

    return (
        <>
            <IconButton onClick={() => toggleDrawer(true)}>
                <StyledMenuIcon />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={mobileOpen}
                onClose={() => toggleDrawer(false)}>
                <StyledTypography
                    variant="h6"
                    onClick={() => {
                        if (type !== "In Theaters") dispatch(fetchInTheaters());
                        toggleDrawer(false);
                    }}>
                    Coding Film
                </StyledTypography>
                <StyledMenuItem
                    onClick={changeMoviesType}
                    disabled={type === "Top 250 Movies"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="topMovies"
                            defaultMessage="Top 250 Movies"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={changeMoviesType}
                    disabled={type === "Top 250 Shows"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="topShows"
                            defaultMessage="Top 250 Shows"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={changeMoviesType}
                    disabled={type === "Most Popular Movies"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="popularMovies"
                            defaultMessage="Most Popular Movies"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={changeMoviesType}
                    disabled={type === "Most Popular Shows"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="popularShows"
                            defaultMessage="Most Popular Shows"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
            </Drawer>
        </>
    );
};

MobileDrawer.propTypes = {
    toggleDrawer: PropTypes.func,
    changeMoviesType: PropTypes.func,
    mobileOpen: PropTypes.bool,
};

export default MobileDrawer;
