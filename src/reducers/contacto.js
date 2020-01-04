import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  contacto: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_contacto`:
      return {
        ...state,
        contacto: action.value[action.key] || {}
      };
    default:
      return state;
  }
};
