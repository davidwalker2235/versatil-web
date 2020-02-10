import { OPEN_SNACKBAR_SUCCESS, OPEN_SNACKBAR_ERROR, CLOSE_SNACKBAR } from "../constants/actionTypes";

const initialState = {
  isSnackbarOpen: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR_SUCCESS:
        return {
            ...state,
            isOpen: true,
            isError: false
        };
    case OPEN_SNACKBAR_ERROR:
        return {
            ...state,
            isOpen: true,
            isError: true
        };
      case CLOSE_SNACKBAR:
        return {
            ...state,
            isOpen: false,
            isError: false
        };
    default:
      return state;
  }
};
