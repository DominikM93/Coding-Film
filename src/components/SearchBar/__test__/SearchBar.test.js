import React from "react";
import SearchBar from "../SearchBar";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";

const onChangeType = jest.fn();
const onSearch = jest.fn();
const setSearchTerm = jest.fn();

const FullSearchBar = () => (
    <IntlProvider locale="en-US" messages={English}>
        <SearchBar
            onChangeType={onChangeType}
            onSearch={onSearch}
            setSearchTerm={setSearchTerm}
            searchTerm=""
        />
    </IntlProvider>
);

describe("SearchBar", () => {
    it("Search textfiled should render", () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("textbox");

        expect(searchElement).toBeInTheDocument();
    });

    it("Search textfiled should be empty on render", () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("textbox");

        expect(searchElement.value).toBe("");
    });

    it("Select should render", () => {
        render(<FullSearchBar />);
        const selectElement = screen.getByRole("button", {name: /titles/i});

        expect(selectElement).toBeInTheDocument();
    });

    it("Select menu should not be visible", () => {
        render(<FullSearchBar />);
        const selectMenuElement = screen.queryByRole("listbox");

        expect(selectMenuElement).not.toBeInTheDocument();
    });

    it("Select should be Titles on render", () => {
        render(<FullSearchBar />);
        const selectElement = screen.getByRole("button", {name: /titles/i});

        expect(selectElement.textContent).toBe("Titles");
    });
});
