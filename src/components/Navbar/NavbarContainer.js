import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {useDispatch} from "react-redux";
import {fetchByType, fetchSearch} from "../../features/movies/moviesSlice";

function NavbarContainer() {
    const [searchTerm, setSearchTerm] = useState("");
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
        setAnchorEl(null);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm !== "")
                dispatch(fetchSearch({type: "Search", search: searchTerm}));
            setSearchTerm("");
        }, 2000);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    return (
        <Navbar
            open={open}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            changeMoviesType={changeMoviesType}
        />
    );
}

export default NavbarContainer;
