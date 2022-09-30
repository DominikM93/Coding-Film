import React, {useState} from "react";
import LanguagePicker from "./LanguagePicker";
import {useAppDispatch} from "../../utils/hooks";
import {changeLang} from "../../features/language/languageSlice";

const LanguagePickerContainer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLocale = (e) => {
        dispatch(changeLang({locale: e.target.id}));
        setAnchorEl(null);
    };

    return (
        <LanguagePicker
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
            changeLocale={changeLocale}
            anchorEl={anchorEl}
        />
    );
};

export default LanguagePickerContainer;
