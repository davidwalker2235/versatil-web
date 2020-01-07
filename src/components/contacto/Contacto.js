import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import FlippingCardComp from "./FlippingCardComp";
import Styles from "./styles";
import MapComponent from "../common/mapComponent/mapComponent";
import "./Contacto.scss";

class Contacto extends React.Component {

  render() {
    const {contacto} = this.props;
    const {contactoData} = contacto;

    return (
      <div>
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
                  xs={5}
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
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Contacto);