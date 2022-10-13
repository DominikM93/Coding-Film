import React from "react";
import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import NavbarContainer from "../NavbarContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";
import userEvent from "@testing-library/user-event";
import {navbarContainerTest} from "../../../tests/data/testData";

describe("MobileDrawerContainer", () => {
    it("Click the menu button to open menu", async () => {
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const menuElement = screen.getAllByRole("menu");

        expect(menuElement[0]).toBeInTheDocument();
    });

    it("Click backdrop to close menu", async () => {
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const backdropElement = screen.getByRole("presentation").firstChild;

        await userEvent.click(backdropElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Top 250 movies", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(navbarContainerTest),
            })
        );
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const menuItemElement = screen.getByRole("link", {
            name: /top 250 movies/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Top 250 shows", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(navbarContainerTest),
            })
        );
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const menuItemElement = screen.getByRole("link", {
            name: /top 250 shows/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on popular movies", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(navbarContainerTest),
            })
        );
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const menuItemElement = screen.getByRole("link", {
            name: /most popular movies/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on popular shows", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(navbarContainerTest),
            })
        );
        renderWithBaseWrapper(<NavbarContainer />);
        const menuButtonElement = screen.getAllByRole("button", {
            name: /menu button/i,
        });

        await userEvent.click(menuButtonElement[0]);

        const menuItemElement = screen.getByRole("link", {
            name: /most popular shows/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Coding film when on main page", async () => {
        renderWithBaseWrapperStore(<NavbarContainer />, global.testStoreEmpty);
        const maintitleElement = screen.getByRole("heading", {
            name: /coding film/i,
        });

        await userEvent.click(maintitleElement);

        expect(maintitleElement).toBeInTheDocument();
    });

    it("Click on Coding film when on main page", async () => {
        renderWithBaseWrapperStore(<NavbarContainer />, global.testStore);
        const maintitleElement = screen.getByRole("heading", {
            name: /coding film/i,
        });

        await userEvent.click(maintitleElement);

        expect(maintitleElement).toBeInTheDocument();
    });
});
