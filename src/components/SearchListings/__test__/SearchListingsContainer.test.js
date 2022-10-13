import React from "react";
import SearchListingsContainer from "../SearchListingsContainer";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import {renderWithBaseWrapperStore} from "../../../tests/helper";
import {useParams} from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

describe("SearchListingsContainer", () => {
    describe("SearchListingsContainer movie", () => {
        beforeEach(() => {
            useParams.mockReturnValue({
                type: "movie",
            });
        });
        it("Show 2 movies in search list", () => {
            renderWithBaseWrapperStore(
                <SearchListingsContainer />,
                global.testStore
            );
            const imagesElement = screen.getAllByRole("img");

            expect(imagesElement.length).toEqual(2);
        });
    });

    describe("SearchListingsContainer actor", () => {
        beforeEach(() => {
            useParams.mockReturnValue({
                type: "actor",
            });
        });
        it("Show 3 actors in search list", () => {
            renderWithBaseWrapperStore(
                <SearchListingsContainer />,
                global.testStore
            );
            const imagesElement = screen.getAllByRole("img");

            expect(imagesElement.length).toEqual(3);
        });
    });
});
