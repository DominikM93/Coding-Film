import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MovieListingsContainer from "./components/MovieListings/MovieListingsContainer";

const App = () => {
    return (
        <>
            <NavbarContainer />
            <MovieListingsContainer />
            <Footer />
        </>
    );
};

export default App;
