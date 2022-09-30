import "@testing-library/jest-dom";
import actorReducer, {fetchActorById} from "../actor/actorSlice";

describe("Actor Slice", () => {
    it("should handle initial state", () => {
        expect(actorReducer(undefined, "unknown")).toEqual({
            actor: {},
            loading: true,
        });
    });
});

describe("Actor Slice async actions", () => {
    const initialState = {actor: {}, loading: true};

    it("should set loading to true", async () => {
        const action = {type: fetchActorById.pending.type};
        const state = actorReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should set loading to false", async () => {
        const actor = {
            name: "Florence Pugh",
            birthDate: "1996-01-03",
        };
        const action = {type: fetchActorById.fulfilled.type, payload: actor};
        const state = actorReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            actor: actor,
            loading: false,
        });
    });
});
