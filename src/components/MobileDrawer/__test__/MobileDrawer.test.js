import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MobileDrawer from "../MobileDrawer";
import {BaseWrapper} from "../../../tests/helper";

const toggleDrawer = jest.fn();
const changeMoviesType = jest.fn();

describe("MobileDrawer", () => {
    it("Render menu button", () => {
        render(
            <BaseWrapper>
                <MobileDrawer
                    toggleDrawer={toggleDrawer}
                    mobileOpen={false}
                    changeMoviesType={changeMoviesType}
                />
            </BaseWrapper>
        );
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button/i,
        });

        expect(menuButtonElement).toBeInTheDocument();
    });

    it("Render the menu when open is true", () => {
        render(
            <BaseWrapper>
                <MobileDrawer
                    toggleDrawer={toggleDrawer}
                    mobileOpen={true}
                    changeMoviesType={changeMoviesType}
                />
            </BaseWrapper>
        );
        const menuElement = screen.getByRole("heading", {name: /coding film/i});

        expect(menuElement).toBeInTheDocument();
    });
});
