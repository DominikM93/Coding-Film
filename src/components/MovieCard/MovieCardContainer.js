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
        const image = m.image
            .replace("V1_UX128_CR0,12,128,176_AL", "V1_UX297_CR0,12,297,409_AL")
            .replace("V1_UX128_CR0,3,128,176_AL", "V1_UX297_CR0,3,297,409_AL")
            .replace("V1_UX128_CR0,1,128,176_AL", "V1_UX297_CR0,1,297,409_AL");
        const newM = {...m, fullTitle: fullTitle, title: title, image: image};

        return newM;
    };

    const newMovie = fixTitle(movie);

    return <MovieCard movie={newMovie} handleOnClick={handleOnClick} />;
};

MovieCardContainer.propTypes = {
    movie: PropTypes.object,
};

export default MovieCardContainer;
