import React from "react";
import {useAppSelector} from "../../utils/hooks";
import {
    getActorsData,
    getDenormlizeActors,
} from "../../features/selectors/actorsSelectors";
import {
    getDenormlizeMovies,
    getMoviesData,
} from "../../features/selectors/moviesSelectors";
import {useParams} from "react-router-dom";
import SearchListings from "./SearchListings";

const SearchListingsContainer = () => {
    const {type} = useParams();

    const actorsData = useAppSelector(getActorsData);
    const actors = useAppSelector(getDenormlizeActors);

    const moviesData = useAppSelector(getMoviesData);
    const movies = useAppSelector(getDenormlizeMovies);

    let listData;
    let loading = true;

    switch (type) {
        case "actor":
            listData = actors;
            loading = actorsData.loading;
            break;

        case "movie":
            listData = movies;
            loading = moviesData.loading;
            break;
    }

    return <SearchListings listData={listData} type={type} loading={loading} />;
};

export default SearchListingsContainer;
