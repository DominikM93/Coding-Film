import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MovieList from "../MovieList";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {movie, movieNoRankUpDown} from "../../../testData/testData";
import PropTypes from "prop-types";

const FullMovieList = ({children}) => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>{children}</BrowserRouter>
        </IntlProvider>
    </Provider>
);

FullMovieList.propTypes = {
    children: PropTypes.element,
};

describe("MovieList", () => {
    it("Render a movie", () => {
        render(
            <FullMovieList>
                <MovieList movie={movie} />
            </FullMovieList>
        );
        const titleElement = screen.getByRole("heading", {
            name: /thor: love and thunder \(2022\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });

    it("Render a movie with no rankUpDown", () => {
        render(
            <FullMovieList>
                <MovieList movie={movieNoRankUpDown} />
            </FullMovieList>
        );
        const titleElement = screen.getByRole("heading", {
            name: /thor: love and thunder \(2022\)/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
