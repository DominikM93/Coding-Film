import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import Movie from "../Movie";
import {movies, actors} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

describe("Movie", () => {
    it("Render a movie", () => {
        renderWithBaseWrapper(
            <Movie
                movie={movies[0]}
                actors={actors}
                loading={false}
                error={null}
            />
        );
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie with an error", () => {
        renderWithBaseWrapper(
            <Movie
                movie={movies[0]}
                actors={actors}
                loading={false}
                error={"Error"}
            />
        );
        const errorElement = screen.getByText(/error: error/i);

        expect(errorElement).toBeInTheDocument();
    });

    it("Show loading when actor is not loaded", () => {
        renderWithBaseWrapper(
            <Movie
                movie={movies[0]}
                actors={undefined}
                loading={true}
                error={null}
            />
        );
        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });
});
