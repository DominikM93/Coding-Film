import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";

const middlewares = [];
export const mockStore = configureMockStore(middlewares);

global.testStore = mockStore({});

global.fetch = jest.fn(() => Promise.resolve({}));
