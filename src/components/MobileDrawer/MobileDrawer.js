import {Drawer, IconButton} from "@mui/material";
import React from "react";
import {
    StyledMenuIcon,
    StyledNavLink,
    StyledMenuItem,
    StyledTypography,
    StyledLink,
} from "./styles";
import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchInTheaters} from "../../features/movies/moviesSlice";
import {getMoviesData} from "../../features/selectors/moviesSelectors";

const MobileDrawer = ({toggleDrawer, mobileOpen, changeMoviesType}) => {
    const moviesData = useAppSelector(getMoviesData);
    const dispatch = useAppDispatch();

    return (
        <>
            <IconButton
                onClick={() => toggleDrawer(true)}
                aria-label="menu button mobile">
                <StyledMenuIcon />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={mobileOpen}
                onClose={() => toggleDrawer(false)}>
                <StyledLink to="/">
                    <StyledTypography
                        variant="h6"
                        onClick={() => {
                            if (moviesData.type !== "theaters") {
                                dispatch(fetchInTheaters());
                                toggleDrawer(false);
                            }
                        }}>
                        Coding Film
                    </StyledTypography>
                </StyledLink>
                <StyledMenuItem
                    onClick={() => changeMoviesType(2)}
                    disabled={moviesData.type === "Top 250 Movies"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="topMovies"
                            defaultMessage="Top 250 Movies"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => changeMoviesType(3)}
                    disabled={moviesData.type === "Top 250 Shows"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="topShows"
                            defaultMessage="Top 250 Shows"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => changeMoviesType(4)}
                    disabled={moviesData.type === "Most Popular Movies"}>
                    <StyledNavLink to="/">
                        <FormattedMessage
                            id="popularMovies"
                            defaultMessage="Most Popular Movies"
                        />
                    </StyledNavLink>
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => changeMoviesType(5)}
                    disabled={moviesData.type === "Most Popular Shows"}>
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
