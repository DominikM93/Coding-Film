import {Box, styled} from "@mui/material";

export const StyledBoxContainer = styled(Box)(() => ({
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "rgb(230, 230, 230)",
}));

export const StyledBoxWrap = styled(Box)(() => ({
    paddingTop: "20px",
    paddingBottom: "5rem",
    backgroundColor: "white",
    width: "80%",
    margin: "0 auto",
}));

export const StyledH5 = styled("h5")(({theme}) => ({
    position: "fixed",
    margin: "0",
    top: "100px",
    [theme.breakpoints.only("xs")]: {
        backgroundColor: "orange",
    },
    [theme.breakpoints.only("sm")]: {
        backgroundColor: "blue",
    },
    [theme.breakpoints.only("md")]: {
        backgroundColor: "green",
    },
    [theme.breakpoints.only("lg")]: {
        backgroundColor: "yellow",
    },
    [theme.breakpoints.only("xl")]: {
        backgroundColor: "cyan",
    },
}));
