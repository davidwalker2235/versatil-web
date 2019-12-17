import { MAP_INITIAL_DATA_NAVBAR } from "../../constants/actionTypes";

export const getData = key => dispatch => {
  fetch("appConf.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return dispatch({
        type: MAP_INITIAL_DATA_NAVBAR,
        value: data,
        key
      });
    });
};
