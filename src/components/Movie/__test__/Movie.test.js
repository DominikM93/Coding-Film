import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import Movie from "../Movie";
import {movies} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

describe("Movie", () => {
    it("Render a movie", () => {
        renderWithBaseWrapper(
            <Movie movie={movies[1]} loading={false} error={null} />
        );
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie with a wiki plot", () => {
        renderWithBaseWrapper(
            <Movie movie={movies[0]} loading={false} error={null} />
        );
        const titleElement = screen.getByRole("heading", {
            name: /thor \(2022\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie with an error", () => {
        renderWithBaseWrapper(
            <Movie movie={movies[0]} loading={false} error={"Error"} />
        );
        const errorElement = screen.getByText(/error: error/i);

        expect(errorElement).toBeInTheDocument();
    });
});
