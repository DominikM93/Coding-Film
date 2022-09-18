import {Box, IconButton, styled} from "@mui/material";

export const StyledSlideWrapper = styled(Box)(({theme}) => ({
    position: "relative",
    width: " 450px",
    height: "400px",
    [theme.breakpoints.only("xs")]: {
        width: " 320px",
        height: "270px",
    },
}));

export const StyledImageBox = styled(Box)({
    position: "relative",
    backgroundColor: "#343434",
    width: "100%",
    height: "85%",
});

export const StyledImg = styled("img")({
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    maxHeight: "100%",
});

export const StyledButtonLeft = styled(IconButton)({
    cursor: "pointer",
    position: "absolute",
    top: "45%",
    padding: "5px",
    borderRadius: "3px",
    border: "none",
    background: "rgba(255, 255, 255, 0.7)",
    left: "10px",
});

export const StyledButtonRight = styled(IconButton)({
    cursor: "pointer",
    position: "absolute",
    top: "45%",
    padding: "5px",
    borderRadius: "3px",
    border: "none",
    background: "rgba(255, 255, 255, 0.7)",
    right: "10px",
});

export const StyledImageCaption = styled("span")({
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
    background: "rgba(255, 255, 255, 0.7)",
});
