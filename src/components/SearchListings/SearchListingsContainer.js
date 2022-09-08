import React from "react";
import SearchListings from "./SearchListings";
import {useSelector} from "react-redux";
import {actorsSelectors, getLoading} from "../../features/actors/actorsSlice";
import {
    moviesSelectors,
    getLoadingMovies,
} from "../../features/movies/moviesSlice";
import {useParams} from "react-router-dom";

const SearchListingsContainer = () => {
    const {type} = useParams();
    let content = "Loading... ";

    const denormlizeData = (ids, entities) => {
        if (ids !== undefined) {
            const data = ids.map((id) => entities[id]);
            return data;
        }
    };
    const actorsAllIds = useSelector(actorsSelectors.selectIds);
    const actorsAllEntities = useSelector(actorsSelectors.selectEntities);
    const actorsLoading = useSelector(getLoading);

    const moviesAllIds = useSelector(moviesSelectors.selectIds);
    const moviesAllEntities = useSelector(moviesSelectors.selectEntities);
    const moviesLoading = useSelector(getLoadingMovies);

    if (type === "celebs") {
        const actors = denormlizeData(actorsAllIds, actorsAllEntities);

        content = actorsLoading ? (
            "Loading..."
        ) : (
            <SearchListings dataSet={actors} type="actor" />
        );
    } else if (type === "titles") {
        const movies = denormlizeData(moviesAllIds, moviesAllEntities);

        content = moviesLoading ? (
            "Loading..."
        ) : (
            <SearchListings dataSet={movies} type="movie" />
        );
    }

    return <>{content}</>;
};

export default SearchListingsContainer;
