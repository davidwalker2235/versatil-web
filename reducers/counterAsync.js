import {
  INCREMENT_COUNTER_ASYNC,
  DECREMENT_COUNTER_ASYNC
} from "../constants/constants";

const initialState = {
  value: 0
};

export default function counterAsync(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER_ASYNC:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER_ASYNC:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}
