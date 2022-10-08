import React from "react";
import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import {renderWithBaseWrapper} from "../../../tests/helper";

const open = false;
const anchorEl = document.createElement("button");
const handleClick = jest.fn();
const handleClose = jest.fn();
const changeMoviesType = jest.fn();

describe("<Navbar/>", () => {
    it("Navbar text renders", () => {
        renderWithBaseWrapper(
            <Navbar
                open={open}
                anchorEl={anchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                changeMoviesType={changeMoviesType}
            />
        );
        const navbarElement = screen.getByRole("heading", {
            name: /coding film/i,
        });

        expect(navbarElement).toBeInTheDocument();
    });

    it("Search bar should render", () => {
        renderWithBaseWrapper(
            <Navbar
                open={open}
                anchorEl={anchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                changeMoviesType={changeMoviesType}
            />
        );
        const searchElement = screen.getAllByPlaceholderText(/search/i);
        expect(searchElement[0]).toBeInTheDocument();
    });

    it("Search bar should be empty", () => {
        renderWithBaseWrapper(
            <Navbar
                open={open}
                anchorEl={anchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                changeMoviesType={changeMoviesType}
            />
        );
        const searchElement = screen.getAllByPlaceholderText(/search/i);

        expect(searchElement[0].value).toBe("");
    });
});
