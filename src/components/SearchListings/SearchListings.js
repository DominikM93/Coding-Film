import React from "react";
import SearchCard from "../SearchCard/SearchCard";
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import Loading from "../Loading/Loading";
import {useAppSelector} from "../../utils/hooks";
import {
    getActorsData,
    getDenormlizeActors,
} from "../../features/selectors/actorsSelectors";
import {
    getDenormlizeMovies,
    getMoviesData,
} from "../../features/selectors/moviesSelectors";

const SearchListings = () => {
    const {type} = useParams();

    const actorsData = useAppSelector(getActorsData);
    const actors = useAppSelector(getDenormlizeActors);

    const moviesData = useAppSelector(getMoviesData);
    const movies = useAppSelector(getDenormlizeMovies);

    if (type === "actor") {
        return actorsData.loading ? (
            <Loading />
        ) : (
            <Grid container justifyContent="space-evenly">
                {actors.map((data) => (
                    <SearchCard key={data.id} data={data} type={type} />
                ))}
            </Grid>
        );
    } else if (type === "movie") {
        return moviesData.loading ? (
            <Loading />
        ) : (
            <Grid container justifyContent="space-evenly">
                {movies.map((data) => (
                    <SearchCard key={data.id} data={data} type={type} />
                ))}
            </Grid>
        );
    }
};

export default SearchListings;
