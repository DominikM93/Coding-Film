import React, {useState} from "react";
import Navbar from "./Navbar";
import {useDispatch} from "react-redux";
import {fetchByType} from "../../features/movies/moviesSlice";

function NavbarContainer() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeMoviesType = (e) => {
        const type = e.target.textContent;

        dispatch(fetchByType(type));
        /* if (type === "Top 250 Movies") {
            dispatch(fetchTopMovies());
        } else if (type === "Top 250 Shows") {
            dispatch(fetchTopShows());
        } else if (type === "Most Popular Movies") {
            dispatch(fetchPopularMovies());
        } else if (type === "Most Popular Shows") {
            dispatch(fetchPopularShows());
        } */

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
