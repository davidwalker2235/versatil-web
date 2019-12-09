import { CHANGE_LANGUAJE } from "../constants/actionTypes";
import { SPANISH, CATALAN } from "../constants/languajeTypes";
import cataloniaFlag from "../configuration/images/cataloniaFlag.png";
import spanishFlag from "../configuration/images/spanishFlag.png";

const defaultState = {
  languaje: "catalan",
  flag: cataloniaFlag
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAJE:
      return {
        ...state,
        languaje: action.value,
        flag: getLanguajeFlag(action.value)
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
