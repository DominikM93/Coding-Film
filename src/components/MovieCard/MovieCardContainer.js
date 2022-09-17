import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import {useDispatch} from "react-redux";
import {fetchMovieById} from "../../features/movies/moviesSlice";

const MovieCardContainer = ({movie}) => {
    const dispatch = useDispatch();

    const handleOnClick = (id, allIds) => {
        dispatch(fetchMovieById({id, allIds}));
    };

    const fixTitle = (m) => {
        const fullTitle = m.fullTitle.replace("(I)", "").replace("(II)", "");
        const title = m.title.replace("(I)", "").replace("(II)", "");

        const newM = {...m, fullTitle: fullTitle, title: title};

        return newM;
    };

    const newMovie = fixTitle(movie);

    return <MovieCard movie={newMovie} handleOnClick={handleOnClick} />;
};

MovieCardContainer.propTypes = {
    movie: PropTypes.object,
};

export default MovieCardContainer;
