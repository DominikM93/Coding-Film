import React, {useEffect} from "react";
import Movie from "./Movie";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchMovieById} from "../../features/movies/moviesSlice";
import {moviesSelectors} from "../../features/selectors/moviesSelectors";

const MovieContainer = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const allIds = useAppSelector(moviesSelectors.selectIds);

    useEffect(() => {
        dispatch(fetchMovieById({id, allIds}));
    }, []);

    const movie = useAppSelector((state) =>
        moviesSelectors.selectById(state, id)
    );

    return (
        <Movie
            movie={movie}
            loading={movie?.loading}
            error={movie?.errorMessage}
        />
    );
};

export default MovieContainer;
