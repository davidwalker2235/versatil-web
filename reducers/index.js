import { combineReducers } from "redux";
import counter from "./counter";
import color from "./color";
import counterAsync from "./counterAsync";

const rootReducer = combineReducers({
  counter,
  counterAsync,
  color
});

export default rootReducer;
