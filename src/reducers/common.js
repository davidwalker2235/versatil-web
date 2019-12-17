import {
  CHANGE_LANGUAJE,
  MAP_INITIAL_DATA_NAVBAR
} from "../constants/actionTypes";
import { SPANISH, CATALAN } from "../constants/languajeTypes";
import cataloniaFlag from "../configuration/images/cataloniaFlag.png";
import spanishFlag from "../configuration/images/spanishFlag.png";

const defaultState = {
  languaje: "ca",
  flag: cataloniaFlag,
  navBarData: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAJE:
      return {
        ...state,
        languaje: action.value,
        flag: getLanguajeFlag(action.value)
      };
    case MAP_INITIAL_DATA_NAVBAR:
      return {
        ...state,
        navBarData: action.value.navBar
      };
    default:
      return state;
  }
};

const getLanguajeFlag = value => {
  switch (value) {
    case CATALAN:
      return cataloniaFlag;
    case SPANISH:
      return spanishFlag;
    default:
      return cataloniaFlag;
  }
};
