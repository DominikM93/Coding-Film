import React, {useEffect} from "react";
import Movie from "./Movie";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchMovieById} from "../../features/movies/moviesSlice";
import {
    getMoviesData,
    moviesSelectors,
} from "../../features/selectors/moviesSelectors";

const MovieContainer = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const moviesData = useAppSelector(getMoviesData);
    const allIds = useAppSelector(moviesSelectors.selectIds);

    useEffect(() => {
        dispatch(fetchMovieById({id, allIds}));
    }, [dispatch]);

    const movie = useAppSelector((state) =>
        moviesSelectors.selectById(state, id)
    );
    let actors;

    if (!moviesData.loading) {
        if (movie.errorMessage === null) {
            if (movie.loading !== undefined) {
                actors = movie.actorList.slice(0, 4);
            }
        }
    }

    return (
        <Movie
            movie={movie}
            actors={actors}
            loading={movie?.loading}
            error={movie?.errorMessage}
        />
    );
};

export default MovieContainer;
