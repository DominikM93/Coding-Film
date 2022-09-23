import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Actor from "../Actor";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {store} from "../../../features/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {actor, deadActor} from "../../../testData/testData";
import PropTypes from "prop-types";

const handleOnClick = jest.fn;

const FullActor = ({children}) => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>{children}</BrowserRouter>
        </IntlProvider>
    </Provider>
);

FullActor.propTypes = {
    children: PropTypes.element,
};

describe("Actor", () => {
    it("Render actor", () => {
        render(
            <FullActor>
                <Actor actor={actor} handleOnClick={handleOnClick} />
            </FullActor>
        );
        const nameElement = screen.getByText(/chris hemsworth/i);

        expect(nameElement).toBeInTheDocument();
    });

    it("Render dead actor", () => {
        render(
            <FullActor>
                <Actor actor={deadActor} handleOnClick={handleOnClick} />
            </FullActor>
        );
        const nameElement = screen.getByText(/sean connery/i);

        expect(nameElement).toBeInTheDocument();
    });
});
