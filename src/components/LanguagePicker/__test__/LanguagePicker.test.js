import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import LanguagePicker from "../LanguagePicker";
import {renderWithBaseWrapper} from "../../../tests/helper";

const handleClick = jest.fn();
const handleClose = jest.fn();
const changeLocale = jest.fn();
const anchorEl = document.createElement("button");

describe("LanguagePicker", () => {
    it("Render Icon button", async () => {
        renderWithBaseWrapper(
            <LanguagePicker
                open={false}
                handleClick={handleClick}
                handleClose={handleClose}
                changeLocale={changeLocale}
                anchorEl={anchorEl}
            />
        );

        const languageButtonElement = screen.getByRole("button", {
            name: /language button/i,
        });

        expect(languageButtonElement).toBeInTheDocument();
    });

    it("Show menu when open is true", async () => {
        renderWithBaseWrapper(
            <LanguagePicker
                open={true}
                handleClick={handleClick}
                handleClose={handleClose}
                changeLocale={changeLocale}
                anchorEl={anchorEl}
            />
        );
        const menuElement = screen.getByRole("menu");

        expect(menuElement).toBeInTheDocument();
    });
});
