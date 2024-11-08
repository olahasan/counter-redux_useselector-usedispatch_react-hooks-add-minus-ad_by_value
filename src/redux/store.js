import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

// Use Redux DevTools extension if available, otherwise use a no-op function
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ((f) => f);
const store = createStore(counterReducer, composeEnhancers());

export default store;
