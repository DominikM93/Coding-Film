import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MovieListings from "../MovieListings";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {movies, type} from "../../../testData/testData";

const FullMovieListings = () => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>
                <MovieListings movies={movies} type={type} />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
);

describe("MovieListings", () => {
    it("Render MovieListings", () => {
        render(<FullMovieListings />);
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
