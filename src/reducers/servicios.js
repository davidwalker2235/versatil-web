import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from "../constants/actionTypes";

const initialState = {
  titlePage: "Servicios page"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
