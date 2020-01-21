import React, {Component} from "react";
import { withStyles } from "@material-ui/styles";
import {connect} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Styles from "./styles";
import "./loading.scss"  

class LoadingComponent extends Component {

  render() {
    const { classes, isOpen } = this.props;
    return (
      <Backdrop className={classes.backdrop} open={isOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }
}

const mapStateToProps = (store) => ({
    isOpen: store.loading.isOpen
})

export default connect(mapStateToProps, null)(withStyles(Styles)(LoadingComponent));