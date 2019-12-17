import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from "react-redux-i18n";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import translationData from "./configuration/translationObject";

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

export const store = createStore(
  reducer,
  applyMiddleware(myRouterMiddleware, thunk)
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationData));
store.dispatch(setLocale("ca"));
