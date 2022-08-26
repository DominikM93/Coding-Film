import React from "react";
import {AppBar, Typography} from "@mui/material";
import {StyledLink, StyledToolbar, StyledSearch} from "./styles";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <StyledToolbar>
                    <StyledLink to="/">
                        <Typography variant="h6">Coding Film</Typography>
                    </StyledLink>

                    <StyledSearch
                        id="filled-basic"
                        label="Search Movie or Show"
                        variant="filled"
                    />
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
