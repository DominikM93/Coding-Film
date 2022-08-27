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
