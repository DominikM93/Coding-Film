import React from "react";
import "@testing-library/jest-dom";
import {screen} from "@testing-library/react";
import Actor from "../Actor";
import {actor, deadActor} from "../../../tests/data/testData";
import {renderWithBaseWrapper} from "../../../tests/helper";

const handleOnClick = jest.fn();

describe("Actor", () => {
    it("Render actor", () => {
        renderWithBaseWrapper(
            <Actor actor={actor} handleOnClick={handleOnClick} />
        );
        const nameElement = screen.getByText(/chris hemsworth/i);

        expect(nameElement).toBeInTheDocument();
    });

    it("Render dead actor", () => {
        renderWithBaseWrapper(
            <Actor actor={deadActor} handleOnClick={handleOnClick} />
        );
        const nameElement = screen.getByText(/sean connery/i);

        expect(nameElement).toBeInTheDocument();
    });
});
