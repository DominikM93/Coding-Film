import {createSlice} from "@reduxjs/toolkit";
import English from "../../lang/en-US.json";
import French from "../../lang/fr.json";

const languageSlice = createSlice({
    name: "language",
    initialState: {locale: "en-US", messages: English},
    reducers: {
        changeLang(state, {payload}) {
            if (payload.locale === "fr") {
                state.locale = "fr";
                state.messages = French;
            } else {
                state.locale = "en-US";
                state.messages = English;
            }
        },
    },
});

export const {changeLang} = languageSlice.actions;
export default languageSlice.reducer;
