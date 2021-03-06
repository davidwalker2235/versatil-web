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
import {closeDialog, openDialog} from '../../../actions/dialog/dialogActions';
import {sendEmail} from "../../../actions/emailServiceActions/emailService";
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import "./dialog.scss"
import Checkbox from "@material-ui/core/Checkbox";

class DialogComponent extends Component {
  constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        mensaje: '',
        acceptIsChecked: false
      }
  }

  handleOnClickPolicy = () => {
    debugger;
    const {openDialog} = this.props;
    if (typeof openDialog === 'function') openDialog(true);
  }

  handleSendEmail = () => {
    const {closeDialog, sendEmail} = this.props;
    const {name, email, mensaje} = this.state;
    if (typeof closeDialog === 'function' && typeof sendEmail === 'function') {
      sendEmail({name, email, mensaje})
      closeDialog()
    }
  };

  handleClose = () => {
    const {closeDialog} = this.props;
    if (typeof closeDialog === 'function') closeDialog()

  };

  handleName = (event) => {
    this.setState({...this.state, name: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({...this.state, email: event.target.value})
  }

  handleMessage = (event) => {
    this.setState({...this.state, mensaje: event.target.value})
  }

  handleOnClickAccept = () => {
    this.setState({...this.state, acceptIsChecked: !this.state.acceptIsChecked})
  }

  isDisabled = () => {
    return this.state.name === '' ||
       this.state.email === '' ||
       this.state.mensaje === '' ||
      !this.state.acceptIsChecked;
  };

  render() {
    const { classes } = this.props;
    return (
        <Dialog open={this.props.isOpen} onClose={this.handleClose}>
            <DialogTitle className={classes.root} id="form-dialog-title">
              <Translate value={`${this.props.isPolicy ? 'policy.title' : 'services.pidaPresupuesto'}`} />
            </DialogTitle>
          {this.props.isPolicy ?
            <DialogContent><Translate value={'policy.text'} /></DialogContent> :
            <DialogContent >
              <DialogContentText className={classes.root} >
                <Translate value={'contacto.formText'} />
              </DialogContentText>
              <form className={classes.textField} noValidate autoComplete="off">
                <TextField
                  onChange={this.handleName}
                  id="nombre"
                  label={<Translate value={'contacto.nombre'} />}
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
                  label={<Translate value={'contacto.mensaje'} />}
                  variant="outlined"
                  fullWidth
                  multiline
                  rowsMax="15"
                  inputProps={{ 'fontSize': '24px' }}
                  value={this.state.mensaje}
                />
              </form>
              <div>
                <Checkbox
                  defaultChecked
                  color="primary"
                  checked={this.state.acceptIsChecked}
                  onChange={this.handleOnClickAccept}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={this.handleOnClickPolicy}><Translate value={'contacto.privacyPolicy'} /></span>
              </div>
            </DialogContent>
          }
            <DialogActions>
              {
                this.props.isPolicy ?
                  <Button
                    className={classes.root}
                    onClick={this.props.closeDialog}
                    color="primary">
                    <Translate value={'contacto.cerrar'} />
                  </Button> :
                  <Button
                    className={classes.root}
                    disabled={this.isDisabled()}
                    onClick={this.handleSendEmail}
                    color="primary">
                    <Translate value={'contacto.enviar'} />
                  </Button>
              }
            </DialogActions>
        </Dialog>
    )
  }
}

const mapStateToProps = (store) => ({
  isOpen: store.dialog.isOpen,
  isPolicy: store.dialog.isPolicy
})

const mapDispatchToProps = (dispatch) => ({
  openDialog: (isPolicy) => dispatch(openDialog(isPolicy)),
  closeDialog: () => dispatch(closeDialog()),
  sendEmail: (data) => dispatch(sendEmail(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(DialogComponent));
