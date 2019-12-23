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

const language = window.sessionStorage.getItem("lang");

if (!language) {
  console.log("para por no existe lenguaje y el lenguaje es:" + language)
  window.sessionStorage.setItem("lang", "ca");
  store.dispatch(setLocale("ca"));
} else if (language !== 'ca') {
  console.log("para por SI existe lenguaje y el lenguaje es:" + language)
  store.dispatch(setLocale("es"));
} else {
  console.log("para por por el ELSE y el lenguaje es:" + language);
  store.dispatch(setLocale("ca"));
}
