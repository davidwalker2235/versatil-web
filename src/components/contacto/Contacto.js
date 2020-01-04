import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import {FlippingCard} from "react-ui-cards";
import {FlippingCardBack} from "react-ui-cards";
import {FlippingCardFront} from "react-ui-cards";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlippingCardComp from "./FlippingCardComp";
import Styles from "./styles";
import "./Contacto.scss";

class Contacto extends React.Component {

  flippingCards = ['colorOne', 'colorTwo', 'colorThree', 'colorFour']

  render() {
    const { classes, contacto } = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" />
        <div className="blurBackgroundImage" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
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
            sm={8}
            lg={8}
          >
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {this.flippingCards.map((color) => (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  lg={3}
                >
                  <FlippingCardComp colorClass={color}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Contacto);