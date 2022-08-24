import {Link} from "react-router-dom";
import {MenuItem, Stack, styled, Toolbar} from "@mui/material";

export const StyledImg = styled("img")(({theme}) => ({
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "20px",
    },
}));

export const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
}));

export const StyledStack = styled(Stack)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export const StyledToolbar = styled(Toolbar)({});

export const StyledMenuItem = styled(MenuItem)(() => ({}));
