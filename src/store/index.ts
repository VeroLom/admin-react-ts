import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

// TODO: Learn RTK and replace with configureStore from RTK
export const store = createStore(rootReducer, applyMiddleware(thunk));