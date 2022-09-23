import React from "react";
import SearchCard from "../SearchCard";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {searchMovieSet, searchActorSet} from "../../../testData/testData";

const FullSearchCard = ({children}) => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>{children}</BrowserRouter>
        </IntlProvider>
    </Provider>
);

FullSearchCard.propTypes = {
    children: PropTypes.element,
};

describe("SearchCard", () => {
    it("Render searched movie", () => {
        render(
            <FullSearchCard>
                <SearchCard data={searchMovieSet[0]} type="movie" />
            </FullSearchCard>
        );
        const titleElement = screen.getByRole("heading", {
            name: /\(1973\) \(tv series\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render searched actor", () => {
        render(
            <FullSearchCard>
                <SearchCard data={searchActorSet[0]} type="actor" />
            </FullSearchCard>
        );
        const nameElement = screen.getByRole("heading", {
            name: /cara delevingne/i,
        });

        expect(nameElement).toBeInTheDocument();
    });
});
