import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("<Footer/>", () => {
    it("Footer text renders", () => {
        render(<Footer />);
        const footerElement = screen.getByText(
            /coding film © dominik mrowca 2022/i
        );

        expect(footerElement).toBeInTheDocument();
    });
});
