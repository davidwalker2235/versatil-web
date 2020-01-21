import { OPEN_LOADING, CLOSE_LOADING } from "../constants/actionTypes";

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOADING:
        return {
            ...state,
            isOpen: true
        };
    case CLOSE_LOADING:
        return {
            ...state,
            isOpen: false   
        };
    default:
      return state;
  }
};
