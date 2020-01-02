import { combineReducers } from "redux";
import home from "./reducers/home";
import servicios from "./reducers/servicios";
import common from "./reducers/common";
import produccionesPropias from "./reducers/produccionesPropias";
import modalVideo from "./reducers/modalVideo";
import { routerReducer } from "react-router-redux";
import { i18nReducer } from "react-redux-i18n";

export default combineReducers({
  home,
  servicios,
  produccionesPropias,
  common,
  modalVideo,
  i18n: i18nReducer,
  router: routerReducer
});
