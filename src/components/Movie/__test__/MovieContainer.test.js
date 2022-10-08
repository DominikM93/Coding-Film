import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieContainer from "../MovieContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: "tt0800369",
    }),
}));

describe("MovieContainer", () => {
    it("Should show loading...", () => {
        renderWithBaseWrapper(<MovieContainer />);

        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });

    it("Click a known for link", async () => {
        renderWithBaseWrapperStore(<MovieContainer />, global.testStore);
    });
});
