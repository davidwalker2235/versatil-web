import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  produccionesPropias: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_produccionesPropias`:
      return {
        ...state,
        produccionesPropias: action.value[action.key].produccionesPropiasAry || []
      };
    default:
      return state;
  }
};
