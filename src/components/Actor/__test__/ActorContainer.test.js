import React from "react";
import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import ActorContainer from "../ActorContainer";
import {BaseWrapper} from "../../../tests/helper";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
    useParams: () => ({
        id: "nm0000288",
    }),
}));

describe("ActorContainer", () => {
    it("a", () => {
        render(
            <BaseWrapper>
                <ActorContainer />
            </BaseWrapper>
        );
    });
});
