import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieCard from "../MovieCard";
import {movie, movieWithRankDown} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

const handleOnClick = jest.fn();

describe("MovieCard", () => {
    it("Render a movie card", () => {
        renderWithBaseWrapper(
            <MovieCard movie={movie} handleOnClick={handleOnClick} />
        );

        const titleElement = screen.getByRole("heading", {
            name: /the avengers/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie card with rank down", () => {
        renderWithBaseWrapper(
            <MovieCard
                movie={movieWithRankDown}
                handleOnClick={handleOnClick}
            />
        );

        const titleElement = screen.getByRole("heading", {
            name: /the avengers/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
