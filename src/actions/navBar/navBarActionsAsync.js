import { CHANGE_LANGUAJE } from "../../constants/actionTypes";
import { setLocale } from "react-redux-i18n";

export const changeLanguaje = value => dispatch => {
  dispatch(setLocale(value));
  dispatch({ type: CHANGE_LANGUAJE, value });
};
