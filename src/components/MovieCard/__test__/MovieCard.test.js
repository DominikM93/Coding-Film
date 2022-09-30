import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MovieCard from "../MovieCard";
import {movie} from "../../../tests/data/testData";
import {BaseWrapper} from "../../../tests/helper";

const handleOnClick = jest.fn();

describe("MovieCard", () => {
    it("Render a movie card", () => {
        render(
            <BaseWrapper>
                <MovieCard movie={movie} handleOnClick={handleOnClick} />
            </BaseWrapper>
        );

        const titleElement = screen.getByRole("heading", {
            name: /the avengers/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
