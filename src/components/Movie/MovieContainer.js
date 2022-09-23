import React, {useEffect} from "react";
import Movie from "./Movie";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMovieById,
    moviesSelectors,
    getLoadingMovies,
} from "../../features/movies/moviesSlice";

const MovieContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(getLoadingMovies);
    const allIds = useSelector(moviesSelectors.selectIds);

    useEffect(() => {
        dispatch(fetchMovieById({id, allIds}));
    }, [dispatch]);

    const movie = useSelector((state) => moviesSelectors.selectById(state, id));
    let actors;
    let content = "Loading...";

    if (!loading) {
        if (movie.errorMessage === null) {
            if (movie.loading !== undefined) {
                actors = movie.actorList.slice(0, 4);
                content = <Movie movie={movie} actors={actors} />;
            }
        } else {
            content = `Error Message: ${movie.errorMessage}`;
        }
    }

    return <>{content}</>;
};

export default MovieContainer;
