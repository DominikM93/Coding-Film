import React, {useEffect} from "react";
import Actor from "./Actor";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchActorById,
    getActor,
    getActorLoading,
} from "../../features/actor/actorSlice";
import {useParams} from "react-router-dom";
import {fetchMovieById} from "../../features/movies/moviesSlice";

const ActorContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const handleOnClick = (id, allIds) => {
        dispatch(fetchMovieById({id, allIds}));
    };
    useEffect(() => {
        dispatch(fetchActorById(id));
    }, [dispatch]);

    const actor = useSelector(getActor);
    const loading = useSelector(getActorLoading);
    return (
        <>
            {!loading ? (
                <Actor actor={actor} handleOnClick={handleOnClick} />
            ) : (
                "Loading..."
            )}
        </>
    );
};

export default ActorContainer;
