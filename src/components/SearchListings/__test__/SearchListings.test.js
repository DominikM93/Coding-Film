import React from "react";
import SearchListings from "../SearchListings";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {searchMovieSet, searchActorSet} from "../../../testData/testData";

const FullSearchListings = ({children}) => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>{children}</BrowserRouter>
        </IntlProvider>
    </Provider>
);

FullSearchListings.propTypes = {
    children: PropTypes.element,
};

describe("SearchListings", () => {
    it("Render Movies SearchListings", () => {
        render(
            <FullSearchListings>
                <SearchListings dataSet={searchMovieSet} type="movie" />
            </FullSearchListings>
        );
        const titleElement = screen.getByRole("heading", {
            name: /saving private ryan/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render Movies SearchListings", () => {
        render(
            <FullSearchListings>
                <SearchListings dataSet={searchActorSet} type="actor" />
            </FullSearchListings>
        );
        const titleElement = screen.getByRole("heading", {
            name: /Robert Aramayo/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
