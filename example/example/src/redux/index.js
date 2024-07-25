import { compose, legacy_createStore, applyMiddleware } from "redux";
import createMiddleware from "redux-saga";
import reducers from "./reducers";
import middleware from "./saga";

const midlewareStore = createMiddleware();
const store = legacy_createStore(
  reducers,
  compose(applyMiddleware(midlewareStore))
);
midlewareStore.run(middleware);

export default store;
