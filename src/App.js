import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {Box} from "@mui/material";

const App = () => {
    return (
        <Box>
            <NavbarContainer />
            <Footer />
        </Box>
    );
};

export default App;
