import {Paper, Stack, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)(({theme}) => ({
    color: "black",
    fontSize: "25px",
    [theme.breakpoints.only("md")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "15px",
    },
}));

export const StyledStack = styled(Stack)(({theme}) => ({
    flexDirection: "row",
    width: "95%",
    margin: "0 auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    [theme.breakpoints.only("xs")]: {
        flexDirection: "column",
    },
}));

export const StyledTypographyName = styled(Typography)(({theme}) => ({
    fontSize: "35px",
    fontWeight: "bold",
    [theme.breakpoints.only("md")]: {
        fontSize: "25px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "20px",
    },
}));

export const StyledTypographyBody = styled(Typography)(({theme}) => ({
    fontSize: "25px",
    paddingBottom: "15px",
    [theme.breakpoints.only("md")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "15px",
    },
}));

export const StyledImg = styled("img")(({theme}) => ({
    width: "auto",
    height: "500px",
    paddingLeft: "50px",
    [theme.breakpoints.only("lg")]: {
        width: "auto",
        height: "400px",
    },
    [theme.breakpoints.only("md")]: {
        width: "auto",
        height: "350px",
    },
    [theme.breakpoints.only("sm")]: {
        width: "auto",
        height: "250px",
    },
    [theme.breakpoints.only("xs")]: {
        width: "50%",
        height: "auto",
    },
}));

export const StyledPaper = styled(Paper)(({theme}) => ({
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
