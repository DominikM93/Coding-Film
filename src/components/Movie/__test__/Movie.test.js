import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Movie from "../Movie";
import {movies, actors} from "../../../tests/data/testData";
import {BaseWrapper} from "../../../tests/helper";

describe("Movie", () => {
    it("Render a movie", () => {
        render(
            <BaseWrapper>
                <Movie
                    movie={movies[0]}
                    actors={actors}
                    loading={false}
                    error={null}
                />
            </BaseWrapper>
        );
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie with an error", () => {
        render(
            <BaseWrapper>
                <Movie
                    movie={movies[0]}
                    actors={actors}
                    loading={false}
                    error={"Error"}
                />
            </BaseWrapper>
        );
        const errorElement = screen.getByText(/error: error/i);

        expect(errorElement).toBeInTheDocument();
    });

    it("Show loading when actor is not loaded", () => {
        render(
            <BaseWrapper>
                <Movie
                    movie={movies[0]}
                    actors={undefined}
                    loading={true}
                    error={null}
                />
            </BaseWrapper>
        );
        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });
});
