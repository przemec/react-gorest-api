import { createStore } from "redux";
import reducers from "./reducers";
import State from "./constants";

export const store = createStore(reducers);

export type AppState = State;
