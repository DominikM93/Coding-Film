import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MovieListingsContainer from "./components/MovieListings/MovieListingsContainer";
import {StyledBoxContainer, StyledBoxWrap} from "./styles";

const App = () => {
    return (
        <>
            <StyledBoxContainer>
                <NavbarContainer />
                <StyledBoxWrap>
                    <MovieListingsContainer />
                </StyledBoxWrap>
                <Footer />
            </StyledBoxContainer>
        </>
    );
};

export default App;
