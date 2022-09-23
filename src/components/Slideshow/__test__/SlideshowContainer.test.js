import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SlideshowContainer from "../SlideshowContainer";
import {slideshowImages} from "../../../testData/testData";

describe("SlideshowContainer", () => {
    it("Click right arrow", async () => {
        render(<SlideshowContainer images={slideshowImages} />);
        const buttonElement = screen.getByTestId("ArrowCircleRightIcon");
        await userEvent.click(buttonElement);

        const imageElement = screen.getByRole("img", {
            name: /scarlett johansson in the avengers \(2012\)/i,
        });
        expect(imageElement).toBeInTheDocument();
    });

    it("Click right arrow 3 times", async () => {
        render(<SlideshowContainer images={slideshowImages} />);
        const buttonElement = screen.getByTestId("ArrowCircleRightIcon");
        await userEvent.click(buttonElement);
        await userEvent.click(buttonElement);
        await userEvent.click(buttonElement);

        const imageElement = screen.getByRole("img", {
            name: /scarlett johansson and chris hemsworth in the avengers \(2012\)/i,
        });
        expect(imageElement).toBeInTheDocument();
    });

    it("Click left arrow", async () => {
        render(<SlideshowContainer images={slideshowImages} />);
        const buttonElement = screen.getByTestId("ArrowCircleLeftIcon");
        await userEvent.click(buttonElement);

        const imageElement = screen.getByRole("img", {
            name: /the avengers \(2012\)/i,
        });
        expect(imageElement).toBeInTheDocument();
    });
});
