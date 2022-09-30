import React, {useState} from "react";
import SearchBar from "./SearchBar";
import {useAppDispatch} from "../../utils/hooks";
import {fetchSearchName} from "../../features/actors/actorsSlice";
import {fetchSearchTitle} from "../../features/movies/moviesSlice";
import {useNavigate} from "react-router-dom";

const SearchBarContainer = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("Titles");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSearch = (e) => {
        if (e.charCode === 13) {
            if (searchTerm !== "") {
                if (searchType === "Celebs") {
                    dispatch(fetchSearchName(searchTerm));
                    navigate("/search/actor");
                } else if (searchType === "Titles") {
                    dispatch(fetchSearchTitle(searchTerm));
                    navigate("/search/movie");
                }
                setSearchTerm("");
            }
        }
    };

    const onChangeType = (e) => {
        setSearchType(e.target.value);
    };

    return (
        <SearchBar
            onSearch={onSearch}
            onChangeType={onChangeType}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />
    );
};

export default SearchBarContainer;
