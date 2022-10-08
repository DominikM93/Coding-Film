import {actorsAdapterSelector} from "../actors/actorsSlice";

export const getActorsData = (state) => {
    return state.actors;
};

export const getDenormlizeActors = ({actors: {ids, entities}}) => {
    if (ids !== undefined) {
        const data = ids.map((id) => entities[id]);
        return data;
    }
};

export const actorsSelectors = actorsAdapterSelector.getSelectors(
    (state) => state.actors
);
