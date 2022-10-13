export const getActorsData = (state) => {
    return state.actors;
};

export const getDenormlizeActors = ({actors: {ids, entities}}) => {
    const data = ids.map((id) => entities[id]);
    return data;
};
