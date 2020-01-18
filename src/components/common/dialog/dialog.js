import React, { Component }  from 'react';
import { withStyles } from "@material-ui/styles";
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {closeDialog} from '../../../actions/dialog/dialogActions';
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import "./dialog.scss"  

class DialogComponent extends Component {
  constructor() {
      super();
      this.state = {
          name: '',
          email: ''
      }
  }

  handleClose = () => {
    this.props.closeDialog();
  };

  isDisabled = () => {
    return false;
  };

  render() {
    const { classes } = this.props;
    return (
        <Dialog open={this.props.isOpen} onClose={this.handleClose}>
            <DialogTitle className={classes.root} id="form-dialog-title">
                <Translate value={'services.pidaPresupuesto'} />
            </DialogTitle>
            <DialogContent >
                <DialogContentText className={classes.root} >
                    <Translate value={'contacto.formText'} />
                </DialogContentText>
                <TextField
                    className={classes.root}
                    autoFocus
                    margin="dense"
                    id="name"
                    label={<Translate value={'contacto.nombre'} />}
                    type="email"
                    fullWidth
                />
                <TextField
                    className={classes.root}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    className={classes.root}
                    disabled={this.isDisabled()}
                    onClick={this.handleClose}
                    color="primary">
                    <Translate value={'contacto.enviar'} />
                </Button>
            </DialogActions>
        </Dialog>
    )
  }
}

const mapStateToProps = (store) => ({
    isOpen: store.dialog.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    closeDialog: () => dispatch(closeDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(DialogComponent));