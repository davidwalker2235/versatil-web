import { combineReducers } from "redux";
import home from "./reducers/home";
import servicios from "./reducers/servicios";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  home,
  servicios,
  router: routerReducer
});
