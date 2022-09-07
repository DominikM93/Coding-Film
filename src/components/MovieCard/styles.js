import {Paper, styled} from "@mui/material";
import {Grade} from "@mui/icons-material";

import {Link} from "react-router-dom";

export const StyledImg = styled("img")({
    width: "200px",
});

export const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
});

export const StyledPaper = styled(Paper)({
    backgroundColor: "lightgray",
    margin: "10px",
    width: "200px",
    padding: "10px",
});

export const StyledGrade = styled(Grade)({
    color: "#ffb100",
});
