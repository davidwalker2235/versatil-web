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
          email: '',
          message: ''
      }
  }

  handleClose = () => {
    this.props.closeDialog();
  };

  handleName = (event) => {
    this.setState({...this.state, name: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({...this.state, email: event.target.value})
  }

  handleMessage = (event) => {
    this.setState({...this.state, message: event.target.value})
  }

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
              <form className={classes.textField} noValidate autoComplete="off">
                <TextField
                  onChange={this.handleName}
                  id="nombre"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  value={this.state.name}
                />
                <TextField
                  onChange={this.handleEmail}
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={this.state.email}
                />
                <TextField
                  onChange={this.handleMessage}
                  id="mensaje"
                  label="Mensaje"
                  variant="outlined"
                  fullWidth
                  multiline
                  rowsMax="15"
                  inputProps={{ 'font-size': '24px' }}
                  value={this.state.message}  
                />
              </form>
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