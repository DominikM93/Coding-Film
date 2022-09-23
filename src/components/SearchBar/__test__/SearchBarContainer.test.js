import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import SearchBarContainer from "../SearchBarContainer";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import userEvent from "@testing-library/user-event";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const FullSearchBar = () => (
    <Provider store={store}>
        <BrowserRouter>
            <IntlProvider locale="en-US" messages={English}>
                <SearchBarContainer />
            </IntlProvider>
        </BrowserRouter>
    </Provider>
);

describe("SearchBarContainer", () => {
    it("Search textfiled should change when typing", async () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("textbox");

        await userEvent.type(searchElement, "ryan");
        expect(searchElement.value).toBe("ryan");
    });

    it("Select menu should open when select is clicked", async () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("button", {name: /titles/i});

        await userEvent.click(searchElement);

        const selectMenuElement = screen.getByRole("listbox");

        expect(selectMenuElement).toBeInTheDocument();
    });

    it("Select menu should close when menu item is clicked", async () => {
        render(<FullSearchBar />);
        const selectElement = screen.getByRole("button", {name: /titles/i});

        await userEvent.click(selectElement);

        const selectMenuItemElement = screen.getByRole("option", {
            name: /celebs/i,
        });

        await userEvent.click(selectMenuItemElement);

        expect(selectElement.textContent).toBe("Celebs");
    });

    it("No action taken if search is empty and pressed", async () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("textbox");

        await userEvent.click(searchElement);
        await userEvent.keyboard("[Enter]");
    });

    it("Search for a Title", async () => {
        render(<FullSearchBar />);
        const searchElement = screen.getByRole("textbox");
        const title = "Ryan";

        await userEvent.click(searchElement);
        await userEvent.type(searchElement, title);
        await userEvent.keyboard("[Enter]");
    });

    it("Search for a Celeb", async () => {
        render(<FullSearchBar />);
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
