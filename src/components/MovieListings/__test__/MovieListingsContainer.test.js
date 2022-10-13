import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieListingsContainer from "../MovieListingsContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";
import {movieListingsTest} from "../../../tests/data/testData";

describe("MovieListingsContainer", () => {
    it("Render MovieListingsContainer", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movieListingsTest),
            })
        );

        renderWithBaseWrapper(<MovieListingsContainer />);
    });

    it("Render MovieListingsContainer", async () => {
        renderWithBaseWrapperStore(
            <MovieListingsContainer />,
            global.testStoreEmpty
        );
        const typeElement = screen.getByText(/in theaters/i);

        expect(typeElement).toBeInTheDocument();
    });
});
