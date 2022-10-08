import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import MovieCardContainer from "../MovieCardContainer";
import {renderWithBaseWrapper} from "../../../tests/helper";
import {movie} from "../../../tests/data/testData";
import userEvent from "@testing-library/user-event";

describe("MovieCardContainer", () => {
    it("Click on the image", async () => {
        renderWithBaseWrapper(<MovieCardContainer movie={movie} />);
        const imageElement = screen.getByRole("img", {
            name: /The Avengers/i,
        });
        await userEvent.click(imageElement);
    });
});
