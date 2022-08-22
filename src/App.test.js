import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("app", () => {
    render(<App />);

    const headingElement = screen.getByText(/hello world/i);

    expect(headingElement).toBeInTheDocument();
});
