import React, { Component } from "react";
import PropTypes from "prop-types";
import versatilLogo from "../../configuration/images/versatilLogo.png";
import Grid from "@material-ui/core/Grid";
import Hovercards from "../HoverCards/Hovercards";
import { withStyles } from "@material-ui/styles";
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import "./index.css";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="home-root">
        <img alt="background" className="backgroundImage" />
        <div className={classes.backgroundLayer} />
        <div className={classes.root}>
          <Grid
            container
            spacing={5}
            className={classes.container}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} lg={8}>
              <div className={classes.paper}>
                <img
                  src={versatilLogo}
                  alt="versatil-logo"
                  className={classes.versatilLogo}
                />
                <div className="subtitle">
                  <Translate value="main.subtitle" />
                  <Translate style={{ color: "#E6057F" }} value="main.pasion" />
                </div>
              </div>
            </Grid>
            <Grid
              container
              className="hoverCardsContainer"
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                spacing={6}
                direction="row"
                justify="center"
                alignItems="center"
              >
                {this.props.hoverCards &&
                  this.props.hoverCards.map((hoveCard, index) => (
                    <Grid item key={index} xs={12} sm={5}>
                      <Hovercards data={hoveCard} index={index} />
                    </Grid>
                  ))}
              </Grid>
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
