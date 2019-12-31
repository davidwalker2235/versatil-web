import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import "./servicios.scss";
import Styles from "./styles";
import {NewsHeaderCard} from "react-ui-cards";
import { Translate } from "react-redux-i18n";

class Servicios extends Component {
  render() {
    const { services } = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" ></div>
        <div className="blurBackgroundImage" ></div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="servicesCardsContainer"
        >
          <Grid
            item
            xs={10}
            sm={10}
            lg={10}
            justify="center">
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}>
                {services.map((service, index)=> (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <NewsHeaderCard 
                      href={service.uri}
                      thumbnail={service.image}
                      title={<Translate value={`services.serviceCards.${service.titleKey}`} />}
                      className="newsCard" />
                </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );   
  }
}

Servicios.propTypes = {};

export default withStyles(Styles)(Servicios);
