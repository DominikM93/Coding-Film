import React, {useState} from "react";
import Navbar from "./Navbar";
import {useAppDispatch} from "../../utils/hooks";
import {fetchByType} from "../../features/movies/moviesSlice";
function NavbarContainer() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeMoviesType = (type) => {
        dispatch(fetchByType(type));
        setAnchorEl(null);
    };

    return (
        <Navbar
            open={open}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            changeMoviesType={changeMoviesType}
        />
    );
}

export default NavbarContainer;
