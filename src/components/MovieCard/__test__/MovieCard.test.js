import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import MovieCard from "../MovieCard";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {movie} from "../../../testData/testData";

const handleOnClick = jest.fn;

const FullMovieCard = () => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>
                <MovieCard movie={movie} handleOnClick={handleOnClick} />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
);

describe("MovieCard", () => {
    it("Render a movie card", () => {
        render(<FullMovieCard />);

        const titleElement = screen.getByRole("heading", {
            name: /the avengers/i,
        });

        expect(titleElement).toBeInTheDocument();
    });
});
