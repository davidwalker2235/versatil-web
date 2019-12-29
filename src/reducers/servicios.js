import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  titlePage: "Servicios page",
  services: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_servicios`:
      return {
        ...state,
        services: action.value[action.key].serviciosAry || []
      };
    default:
      return state;
  }
};
