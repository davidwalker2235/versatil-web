import { OPEN_MODAL_VIDEO, CLOSE_MODAL_VIDEO } from "../constants/actionTypes";

const initialState = {
  isModalVideoOpen: false,
  videoKey: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_VIDEO:
      return { ...state, isModalVideoOpen: true, videoKey: action.key };
    case CLOSE_MODAL_VIDEO:
      return { ...state, isModalVideoOpen: false };
    default:
      return state;
  }
};
