import {Paper, Stack, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const StyledStack = styled(Stack)({
    padding: "20px",
    justifyContent: "space-around",
    margin: "0 auto",
    width: "90%",
});

export const StyledPaper = styled(Paper)(({theme}) => ({
    margin: "0 auto",
    width: "90%",
    [theme.breakpoints.only("xs")]: {
        width: "100%",
    },
}));

export const StyledStackBottom = styled(Stack)(({theme}) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "25%",
    [theme.breakpoints.only("xs")]: {
        flexDirection: "column",
    },
    [theme.breakpoints.only("lg")]: {
        paddingRight: "0px",
    },
    [theme.breakpoints.only("md")]: {
        paddingRight: "0px",
    },
    [theme.breakpoints.only("sm")]: {
        flexDirection: "column",
    },
}));

export const StyledActorLink = styled(Link)({
    color: "black",
});

export const StyledTypographyTitle = styled(Typography)(({theme}) => ({
    fontWeight: "bold",
    [theme.breakpoints.only("xl")]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
    },
}));

export const StyledTypographyTop = styled(Typography)(({theme}) => ({
    paddingRight: "20px",
    paddingTop: "10px",
    fontSize: "25px",
    [theme.breakpoints.only("xs")]: {
        fontSize: "15px",
    },
}));

export const StyledTypographyPlot = styled(Typography)(({theme}) => ({
    padding: "20px 0",
    fontSize: "25px",
    [theme.breakpoints.only("xs")]: {
        fontSize: "15px",
    },
}));

export const StyledTypographyBottom = styled(Typography)(({theme}) => ({
    paddingBottom: "20px",
    paddingRight: "20px",
    fontSize: "25px",
    [theme.breakpoints.only("xs")]: {
        fontSize: "15px",
    },
}));
