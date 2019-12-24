import { CHANGE_LANGUAJE, MAP_INITIAL_DATA } from "../constants/actionTypes";
import { SPANISH, CATALAN } from "../constants/languajeTypes";
import cataloniaFlag from "../configuration/images/cataloniaFlag.png";
import spanishFlag from "../configuration/images/spanishFlag.png";

const getLanguajeFlag = () => {
  switch (window.sessionStorage.getItem("lang")) {
    case CATALAN:
      return cataloniaFlag;
    case SPANISH:
      return spanishFlag;
    default:
      return cataloniaFlag;
  }
};

const defaultState = {
  languaje: "ca",
  flag: getLanguajeFlag(),
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAJE:
        window.sessionStorage.setItem("lang", action.value);
      return {
        ...state,
        languaje: action.value,
        flag: getLanguajeFlag(action.value)
      };
    case `${MAP_INITIAL_DATA}_navBar`:
      return {
        ...state,
        data: action.value[action.key] || null
      };
    default:
      return state;
  }
};
