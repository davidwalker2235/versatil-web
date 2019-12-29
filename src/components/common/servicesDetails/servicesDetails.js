import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import "./servicesDetails.scss";
import Styles from "./styles";

class ServicesDetails extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid
          container
          className={classes.container}
          direction="column"
          justify="center"
          alignItems="left"
        >
          <Grid>Title</Grid>
          <Grid
            container
            className={classes.container}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={6}>hola</Grid>
            <Grid item lg={6}>adios</Grid>
          </Grid>
        </Grid>
      </div>
    );   
  }
}

ServicesDetails.propTypes = {};

export default withStyles(Styles)(ServicesDetails);
