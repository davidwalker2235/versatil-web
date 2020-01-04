import React, { Component } from "react";
import PropTypes from "prop-types";
import versatilLogo from "../../configuration/images/versatilLogo.png";
import Grid from "@material-ui/core/Grid";
import Hovercards from "../HoverCards/Hovercards";
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import "./index.scss";

class Home extends Component {
  render() {
    const { classes, openModalVideo, closeModalVideo } = this.props;
    return (
      <div className="home-root">
        <img alt="" className="backgroundImage" />
        <div className={classes.backgroundLayer} />
        <div className={classes.root}>
          <Grid
            container
            className={classes.container}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} lg={6}>
              <div className={classes.paper}>
                <img
                  src={versatilLogo}
                  alt="versatil-logo"
                  className={classes.versatilLogo}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <div className={classes.paper}>
                <div className="subtitle">
                  <Button variant="contained" color="secondary" href="/servicios">
                    <Translate className={classes.subtitle} value="main.subtitle" />
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverCards: PropTypes.array
};

export default withStyles(Styles)(Home);
