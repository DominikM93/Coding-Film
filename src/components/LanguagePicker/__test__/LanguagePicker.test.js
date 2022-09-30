import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import LanguagePicker from "../LanguagePicker";
import {BaseWrapper} from "../../../tests/helper";

const handleClick = jest.fn();
const handleClose = jest.fn();
const changeLocale = jest.fn();
const anchorEl = {};

describe("LanguagePicker", () => {
    it("Render Icon button", async () => {
        render(
            <BaseWrapper>
                <LanguagePicker
                    open={false}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    changeLocale={changeLocale}
                    anchorEl={anchorEl}
                />
            </BaseWrapper>
        );

        const languageButtonElement = screen.getByRole("button", {
            name: /language button/i,
        });

        expect(languageButtonElement).toBeInTheDocument();
    });

    it("Show menu when open is true", async () => {
        render(
            <BaseWrapper>
                <LanguagePicker
                    open={true}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    changeLocale={changeLocale}
                    anchorEl={anchorEl}
                />
            </BaseWrapper>
        );
        const menuElement = screen.getByRole("menu");

        expect(menuElement).toBeInTheDocument();
    });
});
