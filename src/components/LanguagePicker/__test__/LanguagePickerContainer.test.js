import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";
import LanguagePickerContainer from "../LanguagePickerContainer";
import {renderWithBaseWrapper} from "../../../tests/helper";

describe("LanguagePicker", () => {
    it("Open menu when button is clicked", async () => {
        renderWithBaseWrapper(<LanguagePickerContainer />);

        const languageButtonElement = screen.getByRole("button", {
            name: /language button/i,
        });

        await userEvent.click(languageButtonElement);

        const menuElement = screen.getByRole("menu");

        expect(menuElement).toBeInTheDocument();
    });

    it("Click on French and close menu", async () => {
        renderWithBaseWrapper(<LanguagePickerContainer />);

        const languageButtonElement = screen.getByRole("button", {
            name: /language button/i,
        });

        await userEvent.click(languageButtonElement);

        const frenchElement = screen.getByRole("menuitem", {name: /french/i});

        await userEvent.click(frenchElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });

    it("Close menu by clicking the backdrop", async () => {
        renderWithBaseWrapper(<LanguagePickerContainer />);

        const languageButtonElement = screen.getByRole("button", {
            name: /language button/i,
        });

        await userEvent.click(languageButtonElement);

        const backdropElement = screen.getByRole("presentation").firstChild;

        await userEvent.click(backdropElement);

        const menuElement = screen.queryByRole("menu");

        expect(menuElement).not.toBeInTheDocument();
    });
});
