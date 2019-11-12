import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants/constants";

const initialState = {
  color: "grey"
};

export default function color(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, color: "green" };
    case DECREMENT_COUNTER:
      return { ...state, color: "red" };
    default:
      return state;
  }
}
