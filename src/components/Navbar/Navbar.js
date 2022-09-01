import React from "react";
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import {StyledLink, StyledSearch} from "./styles";

function Navbar({open, handleClick, handleClose, anchorEl}) {
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
                            <MenuItem onClick={handleClose}>
                                Top 250 Movies
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Top 250 Shows
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Most Popular Movies
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
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

export default Navbar;
