import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  quienesSomos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_quienesSomos`:
      return {
        ...state,
        quienesSomos: action.value[action.key] || {}
      };
    default:
      return state;
  }
};
