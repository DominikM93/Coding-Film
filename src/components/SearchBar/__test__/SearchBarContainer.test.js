import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import SearchBarContainer from "../SearchBarContainer";
import userEvent from "@testing-library/user-event";
import {BaseWrapper} from "../../../tests/helper";

describe("SearchBarContainer", () => {
    it("Search textfiled should change when typing", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const searchElement = screen.getByRole("textbox");

        await userEvent.type(searchElement, "ryan");
        expect(searchElement.value).toBe("ryan");
    });

    it("Select menu should open when select is clicked", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const searchElement = screen.getByRole("button", {name: /titles/i});

        await userEvent.click(searchElement);

        const selectMenuElement = screen.getByRole("listbox");

        expect(selectMenuElement).toBeInTheDocument();
    });

    it("Select menu should close when menu item is clicked", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const selectElement = screen.getByRole("button", {name: /titles/i});

        await userEvent.click(selectElement);

        const selectMenuItemElement = screen.getByRole("option", {
            name: /celebs/i,
        });

        await userEvent.click(selectMenuItemElement);

        expect(selectElement.textContent).toBe("Celebs");
    });

    it("No action taken if search is empty and pressed", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const searchElement = screen.getByRole("textbox");

        await userEvent.click(searchElement);
        await userEvent.keyboard("[Enter]");
    });

    it("Search for a Title", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const searchElement = screen.getByRole("textbox");
        const title = "Ryan";

        await userEvent.click(searchElement);
        await userEvent.type(searchElement, title);
        await userEvent.keyboard("[Enter]");
    });

    it("Search for a Celeb", async () => {
        render(
            <BaseWrapper>
                <SearchBarContainer />
            </BaseWrapper>
        );
        const searchElement = screen.getByRole("textbox");
        const celeb = "Jack";
        const selectElement = screen.getByRole("button", {name: /titles/i});

        await userEvent.click(selectElement);

        const selectMenuItemElement = screen.getByRole("option", {
            name: /celebs/i,
        });

        await userEvent.click(selectMenuItemElement);
        await userEvent.click(searchElement);
        await userEvent.type(searchElement, celeb);
        await userEvent.keyboard("[Enter]");
    });
});
