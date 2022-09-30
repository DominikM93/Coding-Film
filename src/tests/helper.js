import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {store} from "../features/store";
import English from "../lang/en-US.json";
const locale = "en-US";

export const BaseWrapper = ({children}) => (
    <Provider store={store}>
        <BrowserRouter>
            <IntlProvider locale={locale} messages={English}>
                {children}
            </IntlProvider>
        </BrowserRouter>
    </Provider>
);

BaseWrapper.propTypes = {
    children: PropTypes.any,
    store: PropTypes.any,
};
