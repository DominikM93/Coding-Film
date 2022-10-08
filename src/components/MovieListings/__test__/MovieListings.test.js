import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieListings from "../MovieListings";
import {movies, type} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

describe("MovieListings", () => {
    it("Render MovieListings", () => {
        renderWithBaseWrapper(<MovieListings movies={movies} type={type} />);
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
