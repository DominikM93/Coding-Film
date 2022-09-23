import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Movie from "../Movie";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {movies, actors} from "../../../testData/testData";

const FullMovie = () => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>
                <Movie movie={movies[0]} actors={actors} />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
);

describe("Movie", () => {
    it("Render a movie", () => {
        render(<FullMovie />);
        const titleElement = screen.getByRole("heading", {
            name: /the avengers \(2012\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
