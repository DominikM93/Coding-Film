import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Actor from "../Actor";
import {actor, deadActor} from "../../../tests/data/testData";
import {BaseWrapper} from "../../../tests/helper";

const handleOnClick = jest.fn();

describe("Actor", () => {
    it("Render actor", () => {
        render(
            <BaseWrapper>
                <Actor actor={actor} handleOnClick={handleOnClick} />
            </BaseWrapper>
        );
        const nameElement = screen.getByText(/chris hemsworth/i);

        expect(nameElement).toBeInTheDocument();
    });

    it("Render dead actor", () => {
        render(
            <BaseWrapper>
                <Actor actor={deadActor} handleOnClick={handleOnClick} />
            </BaseWrapper>
        );
        const nameElement = screen.getByText(/sean connery/i);

        expect(nameElement).toBeInTheDocument();
    });
});
