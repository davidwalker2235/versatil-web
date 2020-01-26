import React, {Component} from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/styles";
import Snackbar from '@material-ui/core/Snackbar';
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import "./snackbar.scss";

class SnackbarComponent extends Component {

  render() {
    const { isOpen, classes } = this.props;
    return (
      <Snackbar
        className={this.props.isError ? classes.anchorOriginTopRightError : classes.anchorOriginTopRightSuccess}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key={'top,right'}
        open={isOpen}
        autoHideDuration={3000}
        onClose={this.props.closeSnackbar}
        message={this.props.isError ? <Translate value='snackbar.error' /> : <Translate value='snackbar.success' />}
      />
    )
  }
}

const mapStateToProps = (store) => ({
    isOpen: store.snackbar.isOpen,
    isError: store.snackbar.isError
})

const mapDispatchToProps = (dispatch) => ({
  openSnackbar: () => dispatch({type: 'OPEN_SNACKBAR'}),
  closeSnackbar: () => dispatch({type: 'CLOSE_SNACKBAR'})
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(SnackbarComponent));