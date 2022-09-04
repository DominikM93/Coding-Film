import React, {useEffect} from "react";
import Actor from "./Actor";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchActorById,
    getActor,
    getActorLoading,
} from "../../features/actor/actorSlice";
import {useParams} from "react-router-dom";

const ActorContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActorById(id));
    }, [dispatch]);

    const actor = useSelector(getActor);
    const loading = useSelector(getActorLoading);
    return <>{!loading ? <Actor actor={actor} /> : "Loading..."}</>;
};

export default ActorContainer;
