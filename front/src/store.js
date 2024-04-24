import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middelware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddelware(...middelware)
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
