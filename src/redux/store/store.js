import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const initialState = {};

const devTools =
	process.env.NODE_ENV === "production"
		? applyMiddleware(...middlewares)
		: composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, initialState, devTools);
