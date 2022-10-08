import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MobileDrawer from "../MobileDrawer";
import {renderWithBaseWrapper} from "../../../tests/helper";

const toggleDrawer = jest.fn();
const changeMoviesType = jest.fn();

describe("MobileDrawer", () => {
    it("Render menu button", () => {
        renderWithBaseWrapper(
            <MobileDrawer
                toggleDrawer={toggleDrawer}
                mobileOpen={false}
                changeMoviesType={changeMoviesType}
            />
        );
        const menuButtonElement = screen.getByRole("button", {
            name: /menu button/i,
        });

        expect(menuButtonElement).toBeInTheDocument();
    });

    it("Render the menu when open is true", () => {
        renderWithBaseWrapper(
            <MobileDrawer
                toggleDrawer={toggleDrawer}
                mobileOpen={true}
                changeMoviesType={changeMoviesType}
            />
        );
        const menuElement = screen.getByRole("heading", {name: /coding film/i});

        expect(menuElement).toBeInTheDocument();
    });
});
