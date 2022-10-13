import React from "react";
import SearchListings from "../SearchListings";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import {renderWithBaseWrapper} from "../../../tests/helper";
import {movie} from "../../../tests/data/testData";

/* jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
})); */

describe("SearchListings", () => {
    it("Show loading when loading is true", () => {
        renderWithBaseWrapper(
            <SearchListings listData={[movie]} type="movie" loading={true} />
        );
        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });

    it("Show a movie", () => {
        renderWithBaseWrapper(
            <SearchListings listData={[movie]} type="movie" loading={false} />
        );

        const movieItemElement = screen.getByRole("img", {
            name: /The Avengers/i,
        });
        expect(movieItemElement).toBeInTheDocument();
    });
    /* beforeEach(() => {
        useParams.mockReturnValue({
            type: "movie",
        });
    });
    it("Show 2 movies in search list", () => {
        renderWithBaseWrapperStore(<SearchListings />, global.testStore);
        const imagesElement = screen.getAllByRole("img");

        expect(imagesElement.length).toEqual(2);
    });
});

describe("SearchListings", () => {
    beforeEach(() => {
        useParams.mockReturnValue({
            type: "actor",
        });
    });
    it("Show 3 actors in search list", () => {
        renderWithBaseWrapperStore(<SearchListings />, global.testStore);
        const imagesElement = screen.getAllByRole("img");

        expect(imagesElement.length).toEqual(3);
    }); */
});
