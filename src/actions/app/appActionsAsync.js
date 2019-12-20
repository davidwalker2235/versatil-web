import { MAP_INITIAL_DATA } from "../../constants/actionTypes";

export const getData = key => dispatch => {
  fetch("appConf.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return dispatch({
        type: `${MAP_INITIAL_DATA}_${key}`,
        value: data,
        key
      });
    });
};
