import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancer = compose(applyMiddleware(...[logger, thunk]));

import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer, undefined, composeEnhancer);
