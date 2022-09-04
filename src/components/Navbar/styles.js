import {Link} from "react-router-dom";
import {Stack, styled, TextField, Toolbar} from "@mui/material";

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

export const StyledNavLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
}));

export const StyledStack = styled(Stack)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    backgroundColor: "red",
    width: "100%",
}));

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

export const StyledSearch = styled(TextField)({
    width: "50%",
    maxWidth: "600px",
});
