import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {store as MyStore} from "../features/store";
import English from "../lang/en-US.json";
const locale = "en-US";
import {render} from "@testing-library/react";

export const BaseWrapper = ({element, store}) => (
    <Provider store={store || MyStore}>
        <BrowserRouter>
            <IntlProvider locale={locale} messages={English}>
                {element}
            </IntlProvider>
        </BrowserRouter>
    </Provider>
);

export const renderWithBaseWrapper = (element) => {
    render(<BaseWrapper element={element} />);
};

export const renderWithBaseWrapperStore = (element, store) => {
    render(<BaseWrapper element={element} store={store} />);
};

/* export const customRender = (ui, store, options) => {
    render(ui, {
        wrapper: (props) => <BaseWrapper {...props} store={store} />,
        ...options,
    });
}; */

BaseWrapper.propTypes = {
    element: PropTypes.any,
    store: PropTypes.any,
};
