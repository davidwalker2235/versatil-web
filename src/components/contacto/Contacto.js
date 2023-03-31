import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import FlippingCardComp from "./FlippingCardComp";
import Styles from "./styles";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Contacto.css";

class Contacto extends React.Component {

  CLAVE_API = 'AIzaSyCRiAwIX8Rdp_yACzWyKCP1eoknKDogxeA';
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mensaje: '',
      acceptIsChecked: false
    }
  }

  handleName = (event) => {
    this.setState({...this.state, name: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({...this.state, email: event.target.value})
  }

  handleMessage = (event) => {
    this.setState({...this.state, mensaje: event.target.value})
  }

  handleSendEmail = () => {
    const {sendEmail} =  this.props;
    const {name, email, mensaje} = this.state;
    if (typeof sendEmail === 'function') {
      sendEmail({name, email, mensaje})
    }
  }

  handleOnClickAccept = () => {
    this.setState({...this.state, acceptIsChecked: !this.state.acceptIsChecked})
  }

  handleOnClickPolicy = () => {
    const {openDialog} = this.props;
    if (typeof openDialog === 'function') openDialog(true);
  }

  isDisabled = () => {
    return this.state.name === '' ||
           this.state.email === '' ||
           this.state.mensaje === '' ||
           !this.state.acceptIsChecked;
  };

  render() {
    const {contacto, classes} = this.props;
    const {contactoData, mapImage} = contacto;

    return (
      <div className="contactoRoot">
        <div className="servicesBackgroundImage" />
        <div className="blurBackgroundImage" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={9}
        >
          <Grid
            container
            direction="row"
            justify="center"
            className="servicesCardsContainer"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}>
                <h2 className="fancy-title-8 mk-fancy-title mk-animate-element pp-title">
                  <Translate className="pp-color-gradient" value="contacto.title" />
                </h2>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={8}
          >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                {contactoData && contactoData.map((contactoElem, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    className="flippingCardItemRoot"
                  >
                    <FlippingCardComp colorClass={contactoElem.color} icon={contactoElem.id} text={contactoElem.text} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
            <Grid
              item
              xs={10}
              sm={10}
              lg={7}
            >
              <div style={{width: "100%", height: "100%"}}>
                <img alt="map" src={mapImage} style={{width: 'inherit', height: 'inherit'}}/>
              </div>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              lg={7}
              className={classes.root}
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <Translate value={'services.pidaPresupuesto'} />
                  </Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <Translate value={'contacto.formText'} />
                  </Typography>
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
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={this.handleSendEmail} disabled={this.isDisabled()}>
                    <Translate value={'contacto.enviar'} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Contacto);