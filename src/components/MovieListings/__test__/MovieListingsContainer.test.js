import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieListingsContainer from "../MovieListingsContainer";
import {renderWithBaseWrapperStore} from "../../../tests/helper";
import userEvent from "@testing-library/user-event";

describe("MovieListingsContainer", () => {
    it("Render MovieListingsContainer", async () => {
        renderWithBaseWrapperStore(
            <MovieListingsContainer />,
            global.testStore
        );
        const imageElement = screen.getByRole("img", {
            name: /Thor/i,
        });
        await userEvent.click(imageElement);
    });

    it("Render MovieListingsContainer", async () => {
        renderWithBaseWrapperStore(
            <MovieListingsContainer />,
            global.testStoreEmpty
        );
        const typeElement = screen.getByText(/in theaters/i);

        expect(typeElement).toBeInTheDocument();
    });
});
