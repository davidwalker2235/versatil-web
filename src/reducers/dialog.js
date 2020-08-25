import { OPEN_DIALOG, CLOSE_DIALOG } from "../constants/actionTypes";

const initialState = {
  isOpen: false,
  isPolicy: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      debugger;
        return {
            ...state,
            isOpen: true,
            isPolicy: action.value
        };
    case CLOSE_DIALOG:
        return {
            ...state,
            isOpen: false,
            isPolicy: false
        };
    default:
      return state;
  }
};
