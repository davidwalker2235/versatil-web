import { openLoading, closeLoading } from "../loading/loading";
import * as emailjs from 'emailjs-com'

export const sendEmail = (data) => dispatch => {
  data && dispatch(openLoading());
  data && emailjs.send('smtp_server', 'versatil_info', data, 'user_Om4bgyBVyCkLXVmrutgEQ')
    .then(function(response) {
      dispatch(closeLoading());
      dispatch({type: 'OPEN_SNACKBAR_SUCCESS'})
    }, function(err) {
      dispatch(closeLoading());
      dispatch({type: 'OPEN_SNACKBAR_ERROR'})
    });
};
