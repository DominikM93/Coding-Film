import {Paper, styled} from "@mui/material";
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
    minHeight: "350px",
    padding: "10px",
});
