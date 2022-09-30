import React from "react";
import SearchListings from "../SearchListings";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import {BaseWrapper} from "../../../tests/helper";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        type: "movie",
    }),
}));

describe("SearchListings", () => {
    /* it("Render Movies SearchListings", () => {
        render(
            <BaseWrapper>
                <SearchListings />
            </BaseWrapper>
        );
        const titleElement = screen.getByRole("heading", {
            name: /saving private ryan/i,
        });

        expect(titleElement).toBeInTheDocument();
    }); */
    /* it("Render Movies SearchListings", () => {
        render(
            <BaseWrapper>
                <SearchListings dataSet={searchActorSet} type="actor" />
            </BaseWrapper>
        );
        const titleElement = screen.getByRole("heading", {
            name: /Robert Aramayo/i,
        });

        expect(titleElement).toBeInTheDocument();
    }); */
});
