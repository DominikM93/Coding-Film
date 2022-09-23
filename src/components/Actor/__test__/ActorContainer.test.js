import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import ActorContainer from "../ActorContainer";
import {Provider} from "react-redux";
import {store} from "../../../features/store";
import {IntlProvider} from "react-intl";
import English from "../../../lang/en-US.json";
import {BrowserRouter} from "react-router-dom";

const FullActorContainer = () => (
    <Provider store={store}>
        <IntlProvider locale="en-US" messages={English}>
            <BrowserRouter>
                <ActorContainer />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
);

describe("ActorContainer", () => {
    it("a", () => {
        render(<FullActorContainer />);
    });
});
