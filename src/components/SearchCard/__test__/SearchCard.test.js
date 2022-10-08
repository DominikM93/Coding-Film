import React from "react";
import SearchCard from "../SearchCard";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import {searchMovieSet, searchActorSet} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

describe("SearchCard", () => {
    it("Render searched movie", () => {
        renderWithBaseWrapper(
            <SearchCard data={searchMovieSet[0]} type="movie" />
        );
        const titleElement = screen.getByRole("heading", {
            name: /\(1973\) \(tv series\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render searched actor", () => {
        renderWithBaseWrapper(
            <SearchCard data={searchActorSet[0]} type="actor" />
        );
        const nameElement = screen.getByRole("heading", {
            name: /cara delevingne/i,
        });

        expect(nameElement).toBeInTheDocument();
    });
});
