import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import FlippingCardComp from "./FlippingCardComp";
import Styles from "./styles";
import MapComponent from "../common/mapComponent/mapComponent";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Contacto.scss";

class Contacto extends React.Component {

  constructor() {
    super();
    this.state = {
        name: '',
        email: '',
        mensaje: ''
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

  isDisabled = () => {
    return this.state.name === '' || this.state.email === '' || this.state.mensaje === '' ;
  };

  render() {
    const {contacto, classes} = this.props;
    const {contactoData} = contacto;

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
                    xs={6}
                    sm={3}
                    lg={3}
                  >
                    <FlippingCardComp colorClass={contactoElem.color} icon={contactoElem.id}/>
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
              style={{height: "400px"}}
            >
              <div style={{width: "100%", height: "100%"}}>
                <MapComponent
                  width="400px"
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAv7hTkfNIjSZ36H1H0giYugj4MdiYjaks&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ position: "relative", height: "100%", width: "100%" }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
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