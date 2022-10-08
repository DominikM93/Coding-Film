import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MobileDrawerContainer from "../MobileDrawerContainer";
import {
    renderWithBaseWrapper,
    renderWithBaseWrapperStore,
} from "../../../tests/helper";
import userEvent from "@testing-library/user-event";

describe("MobileDrawerContainer", () => {
    it("Click the menu button mobile to open menu", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuElement = screen.getByRole("heading", {name: /coding film/i});

        expect(menuElement).toBeInTheDocument();
    });

    it("Click backdrop to close menu", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const backdropElement = screen.getByRole("presentation").firstChild;

        await userEvent.click(backdropElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Top 250 movies", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.getByRole("link", {
            name: /top 250 movies/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Top 250 shows", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.getByRole("link", {
            name: /top 250 shows/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on popular movies", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.getByRole("link", {
            name: /most popular movies/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on popular shows", async () => {
        renderWithBaseWrapper(<MobileDrawerContainer />);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.getByRole("link", {
            name: /most popular shows/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });

    it("Click on Coding film when on main page", async () => {
        renderWithBaseWrapperStore(
            <MobileDrawerContainer />,
            global.testStoreEmpty
        );
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).toBeInTheDocument();
    });

    it("Click on Coding film when not on main page", async () => {
        renderWithBaseWrapperStore(<MobileDrawerContainer />, global.testStore);
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button mobile/i,
        });

        await userEvent.click(menuButtonElement);

        const menuItemElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });

        await userEvent.click(menuItemElement);

        const menuElement = screen.queryByRole("heading", {
            name: /coding film/i,
        });
        expect(menuElement).not.toBeInTheDocument();
    });
});
