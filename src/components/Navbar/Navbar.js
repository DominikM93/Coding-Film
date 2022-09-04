import React from "react";
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import {StyledLink, StyledSearch, StyledNavLink} from "./styles";
import PropTypes from "prop-types";

function Navbar({
    open,
    setSearchTerm,
    searchTerm,
    handleClick,
    handleClose,
    anchorEl,
    changeMoviesType,
}) {
    return (
        <>
            <AppBar position="static">
                <Grid container sx={{alignItems: "center"}}>
                    <Grid item md={1}></Grid>
                    <Grid item md={1}>
                        <StyledLink to="/">
                            <Typography variant="h6">Coding Film</Typography>
                        </StyledLink>
                    </Grid>
                    <Grid item md={1}>
                        <Button variant="contained" onClick={handleClick}>
                            Menu
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={changeMoviesType}>
                                <StyledNavLink to="/">
                                    Top 250 Movies
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                <StyledNavLink to="/">
                                    Top 250 Shows
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                <StyledNavLink to="/">
                                    Most Popular Movies
                                </StyledNavLink>
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                <StyledNavLink to="/">
                                    Most Popular Shows
                                </StyledNavLink>
                            </MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item md={8}>
                        <StyledSearch
                            id="filled-basic"
                            placeholder="Search Movie or Show"
                            variant="filled"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}

Navbar.propTypes = {
    open: PropTypes.bool,
    setSearchTerm: PropTypes.func,
    searchTerm: PropTypes.string,
    handleClick: PropTypes.func,
    handleClose: PropTypes.func,
    changeMoviesType: PropTypes.func,
    anchorEl: PropTypes.object,
};

export default Navbar;
