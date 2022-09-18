import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MovieListingsContainer from "./components/MovieListings/MovieListingsContainer";
import MovieContainer from "./components/Movie/MovieContainer";
import ActorContainer from "./components/Actor/ActorContainer";
import {StyledBoxContainer, StyledBoxWrap} from "./styles";
import {Route, Routes} from "react-router-dom";
import SearchListingsContainer from "./components/SearchListings/SearchListingsContainer";
import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import {getInfo} from "./features/language/languageSlice";
import {createTheme, ThemeProvider} from "@mui/material";

const App = () => {
    const {locale, messages} = useSelector(getInfo);

    const theme = createTheme({
        palette: {
            primary: {
                main: "#616161",
                contrastText: "white",
            },
        },
    });

    return (
        <IntlProvider locale={locale} messages={messages}>
            <ThemeProvider theme={theme}>
                <StyledBoxContainer>
                    <NavbarContainer />
                    <StyledBoxWrap>
                        <Routes>
                            <Route
                                path="/"
                                element={<MovieListingsContainer />}
                            />
                            <Route
                                path="/movie/:id"
                                element={<MovieContainer />}
                            />
                            <Route
                                path="/actor/:id"
                                element={<ActorContainer />}
                            />
                            <Route
                                path="/search/:type"
                                element={<SearchListingsContainer />}
                            />
                        </Routes>
                    </StyledBoxWrap>
                    <Footer />
                </StyledBoxContainer>
            </ThemeProvider>
        </IntlProvider>
    );
};

export default App;
