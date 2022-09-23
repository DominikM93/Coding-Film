import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Slideshow from "../Slideshow";
import {movies} from "../../../testData/testData";

const images = movies[0].images.items;
const activeIndex = 0;
const moveTo = jest.fn;

describe("Slideshow", () => {
    it("render image", () => {
        render(
            <Slideshow
                images={images}
                activeIndex={activeIndex}
                moveTo={moveTo}
            />
        );

        const imageElement = screen.getByRole("img", {
            name: /scarlett johansson and chris hemsworth in the avengers \(2012\)/i,
        });

        expect(imageElement).toBeInTheDocument();
    });

    it("render image text", () => {
        render(
            <Slideshow
                images={images}
                activeIndex={activeIndex}
                moveTo={moveTo}
            />
        );

        const imageTextElement = screen.getByText(
            /scarlett johansson and chris hemsworth in the avengers \(2012\)/i
        );

        expect(imageTextElement).toBeInTheDocument();
    });
});
