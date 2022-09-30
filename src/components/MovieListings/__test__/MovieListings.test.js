import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MovieListings from "../MovieListings";
import {movies, type} from "../../../tests/data/testData";
import {BaseWrapper} from "../../../tests/helper";

describe("MovieListings", () => {
    it("Render MovieListings", () => {
        render(
            <BaseWrapper>
                <MovieListings movies={movies} type={type} />
            </BaseWrapper>
        );
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
