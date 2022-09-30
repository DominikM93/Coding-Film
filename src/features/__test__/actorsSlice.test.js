import "@testing-library/jest-dom";
import actorsReducer, {fetchSearchName, setActors} from "../actors/actorsSlice";

const actors = [
    {id: "nm0001", name: "Florence Pugh"},
    {id: "nm0002", name: "Christian Bale"},
];
const normilizedActors = {
    nm0001: {
        id: "nm0001",
        name: "Florence Pugh",
    },
    nm0002: {
        id: "nm0002",
        name: "Christian Bale",
    },
};

describe("Actors Slice", () => {
    const initialState = {ids: [], entities: {}, loading: true};

    it("should handle initial state", () => {
        expect(actorsReducer(undefined, "unknown")).toEqual({
            ids: [],
            entities: {},
            loading: true,
        });
    });

    it("should handle setActors", () => {
        const actual = actorsReducer(initialState, setActors(actors));
        expect(actual.entities).toEqual(normilizedActors);
    });
});

describe("Actors Slice async actions", () => {
    const initialState = {ids: [], entities: {}, loading: true};

    it("should set loading to true", async () => {
        const action = {type: fetchSearchName.pending.type};
        const state = actorsReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should set loading to false", async () => {
        const action = {type: fetchSearchName.fulfilled.type, payload: actors};
        const state = actorsReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
        });
    });
});
