import "@testing-library/jest-dom";
import languageReducer, {changeLang} from "../language/languageSlice";
import English from "../../lang/en-US.json";

describe("Languages Slice", () => {
    const initialState = {locale: "en-US", messages: English};

    it("should handle initial state", () => {
        expect(languageReducer(undefined, "unknown")).toEqual({
            locale: "en-US",
            messages: English,
        });
    });

    it("should handle changeLang", () => {
        const actual = languageReducer(
            initialState,
            changeLang({locale: "fr"})
        );
        expect(actual.locale).toBe("fr");
    });

    it("should handle invalid changeLang", () => {
        const actual = languageReducer(
            initialState,
            changeLang({locale: "far"})
        );
        expect(actual.locale).toBe("en-US");
    });
});
