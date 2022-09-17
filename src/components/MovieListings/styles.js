import {Paper, styled, Typography} from "@mui/material";

export const StyledPaper = styled(Paper)(({theme}) => ({
    textAlign: "center",
    width: "70%",
    padding: "5px 0",
    margin: "10px auto",
    borderRadius: "60px",
    backgroundColor: "#616161",
    [theme.breakpoints.only("xs")]: {
        width: "100%",
    },
}));

export const StyledTypography = styled(Typography)(({theme}) => ({
    color: "white",
    fontSize: "35px",
    [theme.breakpoints.only("xs")]: {
        fontSize: "25px",
    },
}));
