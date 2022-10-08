import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import ActorContainer from "../ActorContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: "nm1165110",
    }),
}));

describe("ActorContainer", () => {
    it("Should show loading...", () => {
        renderWithBaseWrapper(<ActorContainer />);
        const loadingElement = screen.getByText(/loading\.\.\./i);

        expect(loadingElement).toBeInTheDocument();
    });

    it("Click a known for link", async () => {
        renderWithBaseWrapperStore(<ActorContainer />, global.testStore);

        const linkElement = screen.getByRole("link", {name: /the avengers,/i});
        await userEvent.click(linkElement);
    });
});
