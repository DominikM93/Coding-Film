import React from "react";
import SearchCard from "../SearchCard";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import {searchMovieSet, searchActorSet} from "../../../tests/data/testData";
import {BaseWrapper} from "../../../tests/helper";

describe("SearchCard", () => {
    it("Render searched movie", () => {
        render(
            <BaseWrapper>
                <SearchCard data={searchMovieSet[0]} type="movie" />
            </BaseWrapper>
        );
        const titleElement = screen.getByRole("heading", {
            name: /\(1973\) \(tv series\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render searched actor", () => {
        render(
            <BaseWrapper>
                <SearchCard data={searchActorSet[0]} type="actor" />
            </BaseWrapper>
        );
        const nameElement = screen.getByRole("heading", {
            name: /cara delevingne/i,
        });

        expect(nameElement).toBeInTheDocument();
    });
});
