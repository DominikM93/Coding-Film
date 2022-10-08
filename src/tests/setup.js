import "@testing-library/jest-dom";
import {getDefaultMiddleware} from "@reduxjs/toolkit";
import configureMockStore from "redux-mock-store";
import {initialState, filledState} from "./data/testData";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const middleware = getDefaultMiddleware();
const mockStore = configureMockStore(middleware);
global.testStore = mockStore(filledState);

global.testStoreEmpty = mockStore(initialState);
