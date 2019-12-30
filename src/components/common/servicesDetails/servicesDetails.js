import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import CarouselSlider from "../carouselSlider/carouselSlider";
import "./servicesDetails.scss";
import Styles from "./styles";

class ServicesDetails extends Component {
  render() {
    const {classes, serviceData} = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" ></div>
        <div className="blurBackgroundImage" ></div>
        <Grid
          container
          className={classes.container}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid>
            <h2 className="fancy-title-8 mk-fancy-title mk-animate-element">
              <Translate className="color-gradient" value={`services.serviceCards.${serviceData.title}`} />
            </h2>
          </Grid>
          <Grid
            container
            className={classes.container}
            direction="row"
            spacing={3}
          >
            <Grid item lg={6} sm={6} xs={12}>
              <Grid item lg={12}>
                <CarouselSlider fit={true} images={serviceData.images || []}/>
              </Grid>
              <Grid item lg={12}>
                <CarouselSlider fit={true} images={serviceData.images || []}/>
              </Grid>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Grid container>
                <Grid>
                  <Translate className="service-text" value={`services.text.${serviceData.title}`} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );   
  }
}

ServicesDetails.propTypes = {};

export default withStyles(Styles)(ServicesDetails);
