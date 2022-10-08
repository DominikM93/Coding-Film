import React from "react";
import SearchBar from "../SearchBar";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import {renderWithBaseWrapper} from "../../../tests/helper";

const onChangeType = jest.fn();
const onSearch = jest.fn();
const setSearchTerm = jest.fn();

describe("SearchBar", () => {
    it("Search textfiled should render", () => {
        renderWithBaseWrapper(
            <SearchBar
                onChangeType={onChangeType}
                onSearch={onSearch}
                setSearchTerm={setSearchTerm}
                searchTerm=""
            />
        );
        const searchElement = screen.getByRole("textbox");

        expect(searchElement).toBeInTheDocument();
    });

    it("Search textfiled should be empty on render", () => {
        renderWithBaseWrapper(
            <SearchBar
                onChangeType={onChangeType}
                onSearch={onSearch}
                setSearchTerm={setSearchTerm}
                searchTerm=""
            />
        );
        const searchElement = screen.getByRole("textbox");

        expect(searchElement.value).toBe("");
    });

    it("Select should render", () => {
        renderWithBaseWrapper(
            <SearchBar
                onChangeType={onChangeType}
                onSearch={onSearch}
                setSearchTerm={setSearchTerm}
                searchTerm=""
            />
        );
        const selectElement = screen.getByRole("button", {name: /titles/i});

        expect(selectElement).toBeInTheDocument();
    });

    it("Select menu should not be visible", () => {
        renderWithBaseWrapper(
            <SearchBar
                onChangeType={onChangeType}
                onSearch={onSearch}
                setSearchTerm={setSearchTerm}
                searchTerm=""
            />
        );
        const selectMenuElement = screen.queryByRole("listbox");

        expect(selectMenuElement).not.toBeInTheDocument();
    });

    it("Select should be Titles on render", () => {
        renderWithBaseWrapper(
            <SearchBar
                onChangeType={onChangeType}
                onSearch={onSearch}
                setSearchTerm={setSearchTerm}
                searchTerm=""
            />
        );
        const selectElement = screen.getByRole("button", {name: /titles/i});

        expect(selectElement.textContent).toBe("Titles");
    });
});
