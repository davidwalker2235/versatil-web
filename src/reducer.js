import { combineReducers } from "redux";
import home from "./reducers/home";
import servicios from "./reducers/servicios";
import common from "./reducers/common";
import produccionesPropias from "./reducers/produccionesPropias";
import quienesSomos from "./reducers/quienesSomos";
import contacto from "./reducers/contacto"
import modalVideo from "./reducers/modalVideo";
import dialog from './reducers/dialog';
import loading from './reducers/loading';
import snackbar from './reducers/snackbar';
import { routerReducer } from "react-router-redux";
import { i18nReducer } from "react-redux-i18n";

export default combineReducers({
  home,
  servicios,
  produccionesPropias,
  quienesSomos,
  contacto,
  common,
  modalVideo,
  dialog,
  loading,
  snackbar,
  i18n: i18nReducer,
  router: routerReducer
});
