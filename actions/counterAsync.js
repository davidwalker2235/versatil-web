import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants/constants";

export function incrementAsync() {
  return asyncIncrement;
}

export function decrementAsync() {
  return asyncDecrement;
}

function asyncIncrement(dispatch) {
  setTimeout(function() {
    dispatch({ type: INCREMENT_COUNTER });
  }, 3000);
}

function asyncDecrement(dispatch) {
  setTimeout(function() {
    dispatch({ type: DECREMENT_COUNTER });
  }, 3000);
}
