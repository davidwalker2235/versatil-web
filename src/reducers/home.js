import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  hoverCards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_inicio`:
      return {
        ...state,
        hoverCards: action.value[action.key].hoverCards || []
      };
    default:
      return state;
  }
};
