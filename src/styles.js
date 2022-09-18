import {Box, styled} from "@mui/material";

export const StyledBoxContainer = styled(Box)(() => ({
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "rgb(230, 230, 230)",
}));

export const StyledBoxWrap = styled(Box)(() => ({
    paddingBottom: "5rem",
    width: "95%",
    margin: "0 auto",
}));
