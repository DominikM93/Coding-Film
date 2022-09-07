import React, {useEffect} from "react";
import Movie from "./Movie";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMovieById,
    getMovie,
    getLoading,
} from "../../features/movie/movieSlice";

const MovieContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(getMovie);
    const loading = useSelector(getLoading);

    useEffect(() => {
        if (id !== movie.id) {
            dispatch(fetchMovieById(id));
        }
    }, []);

    let actors;
    if (movie.actorList !== undefined) {
        actors = movie.actorList.slice(0, 4);
    }

    return (
        <>{loading ? "Loading..." : <Movie movie={movie} actors={actors} />}</>
    );
};

export default MovieContainer;
