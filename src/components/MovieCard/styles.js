import {Paper, Stack, styled, Typography} from "@mui/material";
import {Grade} from "@mui/icons-material";

import {Link} from "react-router-dom";

export const StyledImg = styled("img")({
    width: "200px",
    maxHeight: "250px",
});

export const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
});

export const StyledPaper = styled(Paper)({
    backgroundColor: "white",
    margin: "10px",
    width: "200px",
    height: "fit-content",
    padding: "10px",
});

export const StyledGrade = styled(Grade)({
    color: "#ffb100",
});

export const StyledStack = styled(Stack)({
    height: "fit-content",
});

export const StyledTypographyUp = styled(Typography)({
    color: "green",
});

export const StyledTypographyDown = styled(Typography)({
    color: "red",
});
