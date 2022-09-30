import React, {useEffect} from "react";
import Actor from "./Actor";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchActorById} from "../../features/actor/actorSlice";
import {useParams} from "react-router-dom";
import {fetchMovieById} from "../../features/movies/moviesSlice";
import {getActorData} from "../../features/selectors/actorSelectors";

const ActorContainer = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const handleOnClick = (id, allIds) => {
        dispatch(fetchMovieById({id, allIds}));
    };
    useEffect(() => {
        dispatch(fetchActorById(id));
    }, [dispatch]);
    const {actor, loading} = useAppSelector(getActorData);

    return (
        <>
            <Actor
                actor={actor}
                handleOnClick={handleOnClick}
                loading={loading}
            />
        </>
    );
};

export default ActorContainer;
