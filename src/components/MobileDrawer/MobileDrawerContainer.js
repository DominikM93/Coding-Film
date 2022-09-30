import React, {useState} from "react";
import MobileDrawer from "./MobileDrawer";
import {useAppDispatch} from "../../utils/hooks";
import {fetchByType} from "../../features/movies/moviesSlice";

const MobileDrawerContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const dispatch = useAppDispatch();

    const toggleDrawer = (open) => {
        setMobileOpen(open);
    };

    const changeMoviesType = (type) => {
        dispatch(fetchByType(type));
        setMobileOpen(false);
    };

    return (
        <MobileDrawer
            toggleDrawer={toggleDrawer}
            mobileOpen={mobileOpen}
            changeMoviesType={changeMoviesType}
        />
    );
};

export default MobileDrawerContainer;
