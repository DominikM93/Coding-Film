import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MovieListingsContainer from "./components/MovieListings/MovieListingsContainer";
import MovieContainer from "./components/Movie/MoviesContainer";
import {StyledBoxContainer, StyledBoxWrap} from "./styles";
import {Route, Routes} from "react-router-dom";
import Carousel from "./components/practice/Carousel";
const App = () => {
    return (
        <>
            <StyledBoxContainer>
                <NavbarContainer />
                <StyledBoxWrap>
                    <Routes>
                        <Route path="/test" element={<Carousel />} />
                        <Route path="/" element={<MovieListingsContainer />} />
                        <Route path="/movie/:id" element={<MovieContainer />} />
                    </Routes>
                </StyledBoxWrap>
                <Footer />
            </StyledBoxContainer>
        </>
    );
};

export default App;
