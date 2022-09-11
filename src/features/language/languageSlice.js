import {createSlice} from "@reduxjs/toolkit";
import English from "../../lang/en-US.json";
import French from "../../lang/fr.json";

const languageSlice = createSlice({
    name: "language",
    initialState: {locale: "en-US", messages: English},
    reducers: {
        changeLang(state, {payload}) {
            if (payload.locale === "en-US") {
                state.locale = "en-US";
                state.messages = English;
            } else {
                state.locale = "fr";
                state.messages = French;
            }
        },
    },
});

export const {changeLang} = languageSlice.actions;
export const getInfo = (state) => state.language;
export default languageSlice.reducer;
