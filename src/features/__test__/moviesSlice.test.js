import "@testing-library/jest-dom";
import moviesReducer, {
    fetchByType,
    fetchInTheaters,
    fetchMovieById,
    fetchSearchTitle,
    setMovies,
    updateMovie,
    addMovie,
} from "../movies/moviesSlice";

const movies = [
    {
        id: "tt0001",
        name: "Thor",
    },
    {
        id: "tt0002",
        name: "Iron Giant",
    },
];

const normilizedMovies = {
    tt0001: {
        id: "tt0001",
        name: "Thor",
    },
    tt0002: {
        id: "tt0002",
        name: "Iron Giant",
    },
};

const newMovieInfo = {
    id: "tt0001",
    name: "Thor: Love and Thunder",
};

const initialState = {ids: [], entities: {}, loading: true, type: ""};

describe("Movies Slice", () => {
    const changedState = {
        ids: ["tt0001", "tt0002"],
        entities: {
            tt0001: {id: "tt0001", name: "Thor"},
            tt0002: {id: "tt0002", name: "Iron Giant"},
        },
        loading: false,
        type: "",
    };

    it("Should handle initial state", () => {
        expect(moviesReducer(undefined, "unknown")).toEqual({
            ids: [],
            entities: {},
            loading: true,
            type: "",
        });
    });

    it("Should handle setMovies", () => {
        const actual = moviesReducer(initialState, setMovies(movies));
        expect(actual.entities).toEqual(normilizedMovies);
    });

    it("Should handle updateMovie", () => {
        const id = "tt0001";
        const actual = moviesReducer(
            changedState,
            updateMovie({id, changes: newMovieInfo})
        );
        expect(actual.entities.tt0001).toEqual(newMovieInfo);
    });

    it("Should handle addMovie", () => {
        const actual = moviesReducer(initialState, addMovie(newMovieInfo));
        expect(actual.entities.tt0001).toEqual(newMovieInfo);
    });
});

describe("Movies Slice async actions", () => {
    it("Should set loading to true fetchMovieById", () => {
        const action = {type: fetchMovieById.pending.type, payload: movies[0]};
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("Should set loading to false fetchMovieById", () => {
        const action = {
            type: fetchMovieById.fulfilled.type,
            payload: movies[0],
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
        });
    });

    it("Should set loading to true fetchInTheaters", () => {
        const action = {type: fetchInTheaters.pending.type, payload: movies};
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("Should set loading to false and set type to theaters fetchInTheaters", () => {
        const action = {
            type: fetchInTheaters.fulfilled.type,
            payload: "theaters",
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            type: "theaters",
        });
    });

    it("Should set loading to true fetchByType", () => {
        const action = {
            type: fetchByType.pending.type,
            payload: "popularMovies",
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("Should set loading to false and set type to popularMovies fetchByType", () => {
        const action = {
            type: fetchByType.fulfilled.type,
            payload: "popularMovies",
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            type: "popularMovies",
        });
    });

    it("Should set loading to true fetchSearchTitle", () => {
        const action = {
            type: fetchSearchTitle.pending.type,
            payload: "Search",
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("Should set loading to false and set type to Search fetchSearchTitle", () => {
        const action = {
            type: fetchSearchTitle.fulfilled.type,
            payload: "Search",
        };
        const state = moviesReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            type: "Search",
        });
    });
});
