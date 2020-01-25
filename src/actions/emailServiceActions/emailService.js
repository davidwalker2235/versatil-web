import { openLoading, closeLoading } from "../loading/loading";
import * as emailjs from 'emailjs-com'

export const sendEmail = (data) => dispatch => {
  data && dispatch(openLoading());
  data && emailjs.send('gmail', 'email_template', data, 'user_wLa2Yhs2UKzBH3eS2Av2R')
    .then(function(response) {
      dispatch(closeLoading());
      dispatch({type: 'OPEN_SNACKBAR_SUCCESS'})
    }, function(err) {
      dispatch(closeLoading());
      dispatch({type: 'OPEN_SNACKBAR_ERROR'})
    });
};
