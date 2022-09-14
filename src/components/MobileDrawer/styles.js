import {MenuItem, styled, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";

export const StyledMenuIcon = styled(MenuIcon)({
    color: "white",
});

export const StyledNavLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "white",
    fontSize: "13px",
    height: "20px",
}));

export const StyledMenuItem = styled(MenuItem)({
    padding: "0px 5px",
    backgroundColor: "gray",
});

export const StyledTypography = styled(Typography)({
    color: "white",
    backgroundColor: "gray",
    padding: "5px",
});
