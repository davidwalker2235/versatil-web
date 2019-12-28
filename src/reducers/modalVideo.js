import { OPEN_MODAL_VIDEO, CLOSE_MODAL_VIDEO } from "../constants/actionTypes";

const initialState = {
  isModalVideoOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_VIDEO:
      return { ...state, isModalVideoOpen: true };
    case CLOSE_MODAL_VIDEO:
      return { ...state, isModalVideoOpen: false };
    default:
      return state;
  }
};
