import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieContainer from "../MovieContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";
import {movies} from "../../../tests/data/testData";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: "tt0800369",
    }),
}));

describe("MovieContainer", () => {
    it("Should show loading...", () => {
        renderWithBaseWrapper(<MovieContainer />);

        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });

    it("Show a movie", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movies[0]),
            })
        );

        renderWithBaseWrapperStore(<MovieContainer />, global.testStoreEmpty);
    });

    it("Show a movie when its not in the store", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movies[0]),
            })
        );

        renderWithBaseWrapperStore(<MovieContainer />, global.testStoreEmpty);
    });

    it("Show a movie when its in the store", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movies[0]),
            })
        );

        renderWithBaseWrapperStore(<MovieContainer />, global.testStore);
    });
});
