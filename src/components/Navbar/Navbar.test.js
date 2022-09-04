import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import {BrowserRouter} from "react-router-dom";

describe("<Navbar/>", () => {
    it("Navbar text renders", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const navbarElement = screen.getByRole("heading", {
            name: /coding film/i,
        });

        expect(navbarElement).toBeInTheDocument();
    });

    it("Search bar should render", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const searchElement = screen.getByRole("textbox", {
            name: /search movie or show/i,
        });

        expect(searchElement).toBeInTheDocument();
    });

    it("Search bar should be empty", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const searchElement = screen.getByRole("textbox", {
            name: /search movie or show/i,
        });

        expect(searchElement.value).toBe("");
    });
});
