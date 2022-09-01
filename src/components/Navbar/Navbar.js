import React from "react";
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import {StyledLink, StyledSearch} from "./styles";
import PropTypes from "prop-types";

function Navbar({open, handleClick, handleClose, anchorEl, changeMoviesType}) {
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
                                Top 250 Movies
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                Top 250 Shows
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                Most Popular Movies
                            </MenuItem>
                            <MenuItem onClick={changeMoviesType}>
                                Most Popular Shows
                            </MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item md={8}>
                        <StyledSearch
                            id="filled-basic"
                            label="Search Movie or Show"
                            variant="filled"
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}

Navbar.propTypes = {
    open: PropTypes.bool,
    handleClick: PropTypes.func,
    handleClose: PropTypes.func,
    changeMoviesType: PropTypes.func,
    anchorEl: PropTypes.object,
};

export default Navbar;
