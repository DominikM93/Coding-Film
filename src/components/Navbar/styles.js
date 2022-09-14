import {Link} from "react-router-dom";
import {Grid, Stack, styled} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

export const StyledMenuIcon = styled(MenuIcon)({
    color: "white",
});

export const StyledStack = styled(Stack)({
    marginLeft: "20px",
    height: "30px",
    padding: "10px 0px",
    "& .MuiInputBase-root": {
        height: "30px",
    },
    "& .MuiInputBase-input": {
        padding: "5px",
    },
});

export const StyledGridContainer = styled(Grid)(({theme}) => ({
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.only("sm")]: {
        justifyContent: "space-between",
        padding: "0 20px",
    },
    [theme.breakpoints.only("xl")]: {
        justifyContent: "space-evenly",
    },
    [theme.breakpoints.only("xs")]: {
        display: "none",
    },
}));

export const StyledGridContainerMobile = styled(Grid)(({theme}) => ({
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
        display: "block",
    },
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));
