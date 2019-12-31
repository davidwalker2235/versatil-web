import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import CarouselSlider from "../carouselSlider/carouselSlider";
import Button from '@material-ui/core/Button';
import "./servicesDetails.scss";
import Styles from "./styles";
import ReactPlayer from 'react-player';

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
          {serviceData && serviceData.dataAry && serviceData.dataAry.map((data, index) => (
            <Grid
            key={index}
            container
            className={classes.container}
            direction="row"
            spacing={3}
          >
            <Grid item lg={6} sm={6} xs={12}>
              <Grid item lg={12}>
                <CarouselSlider fit={true} images={data.images || []}/>
              </Grid >
              {data.hasVideo && <Grid className={classes.serviceVideo} item lg={12}>
                <ReactPlayer url={data.videoUri} />
              </Grid>}
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Grid container>
                <Grid>
                  <Translate className="service-text" value={`services.text.${serviceData.title}${serviceData.dataAry.length > 1 ? `${index + 1}` : ''}`} />
                </Grid>
                <Grid container>
                  <Grid item lg={5} xs={12} sm={10} className={classes.buttonContainer}>
                    <div className="button-container">
                      <Button size="large" variant="contained" color="secondary">
                        <Translate className="service-button-text" value="services.pidaPresupuesto" />
                      </Button>
                      {data && data.hasCatalogo && <Button size="large" variant="outlined" color="secondary">
                        <Translate className="service-button-text" value="services.verCatalogo" />
                      </Button>}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          ))}
        </Grid>
      </div>
    );   
  }
}

ServicesDetails.propTypes = {};

export default withStyles(Styles)(ServicesDetails);
