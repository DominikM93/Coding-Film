import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MovieListingsContainer from "./components/MovieListings/MovieListingsContainer";
import MovieContainer from "./components/Movie/MovieContainer";
import ActorContainer from "./components/Actor/ActorContainer";
import {StyledBoxContainer, StyledBoxWrap} from "./styles";
import {Route, Routes} from "react-router-dom";
import SearchListingsContainer from "./components/SearchListings/SearchListingsContainer";

const App = () => {
    return (
        <>
            <StyledBoxContainer>
                <NavbarContainer />
                <StyledBoxWrap>
                    <Routes>
                        <Route path="/" element={<MovieListingsContainer />} />
                        <Route path="/movie/:id" element={<MovieContainer />} />
                        <Route path="/actor/:id" element={<ActorContainer />} />
                        <Route
                            path="/search/:type"
                            element={<SearchListingsContainer />}
                        />
                    </Routes>
                </StyledBoxWrap>
                <Footer />
            </StyledBoxContainer>
        </>
    );
};

export default App;
