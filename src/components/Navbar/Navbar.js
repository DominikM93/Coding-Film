import React from "react";
import {AppBar, Typography, IconButton} from "@mui/material";
import {
    StyledImg,
    StyledLink,
    StyledStack,
    StyledToolbar,
    StyledMenuItem,
} from "./styles";

function Navbar() {
    return (
        <>
            <AppBar>
                <StyledToolbar>
                    <StyledStack direction="row">
                        <IconButton disabled>
                            <StyledImg src="movie-icon.png" alt="f1" />
                        </IconButton>
                        <StyledMenuItem>
                            <StyledLink to="/">
                                <Typography variant="h6">Home</Typography>
                            </StyledLink>
                        </StyledMenuItem>
                    </StyledStack>
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
