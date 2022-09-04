import {Stack, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const StyledTypography = styled(Typography)({
    paddingBottom: "20px",
    paddingRight: "20px",
});

export const StyledStack = styled(Stack)({
    padding: "20px",
    justifyContent: "space-around",
});

export const StyledStack1 = styled(Stack)({
    marginRight: "300px",
});

export const StyledActorLink = styled(Link)({
    color: "black",
});
